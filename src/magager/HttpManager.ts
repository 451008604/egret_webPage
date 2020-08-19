class HttpManager {
    private static _instance: HttpManager;
    static get instance(): HttpManager {
        if (!this._instance) {
            this._instance = new HttpManager()
        }
        return this._instance;
    }

    private callBackDic: Map<number, { func: Function, obj: Object }>
    constructor() {
        this.callBackDic = new Map();
    }

    /**
     * 发送http请求
     * @param portName 接口名称
     * @param data 请求数据
     * @param callback 请求回调
     * @param thisObj 作用域
     * @param method 强求类型 默认GET
     */
    sendMessage(portName: string, data: object, callback: Function, thisObj: Object, method: string = egret.HttpMethod.GET): void {
        // let dataStr: string = JSON.stringify(data);
        let dataStr: string = null;
        Config.url += "" + portName;
        if (method == egret.HttpMethod.GET) {
            dataStr = JSON.stringify(data);
            let str = "?";
            for (let i in data) {
                str += (i + "=" + data[i] + "&");
            }
            str.slice(0, str.length - 1);
            Config.url += "" + dataStr;
        }

        let request: egret.HttpRequest = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(Config.url, method);
        request.addEventListener(egret.Event.COMPLETE, this.completeHandler, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.progressHandler, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.errorHandler, this);
        request.send(dataStr);

        this.callBackDic.set(request.hashCode, { func: callback, obj: thisObj });
    }

    private completeHandler(evt: egret.Event): void {
        console.log("收到http数据");
        let request: egret.HttpRequest = evt.target as egret.HttpRequest;
        let data: Object = JSON.parse(request.response);

        let backFun: Function = this.callBackDic.get(request.hashCode).func;
        let thisObj: Object = this.callBackDic.get(request.hashCode).obj;
        backFun(data).bind(thisObj);
        this.callBackDic.delete(request.hashCode);
    }

    private progressHandler(evt: egret.ProgressEvent): void {
        egret.log("post progress : " + Math.floor(100 * evt.bytesLoaded / evt.bytesTotal) + "%");
    }

    private errorHandler(evt: egret.IOErrorEvent): void {
        egret.log("post error : " + evt);
    }
}