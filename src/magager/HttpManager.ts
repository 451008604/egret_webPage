class HttpManager {
    private static _instance: HttpManager;
    static get instance(): HttpManager {
        if (!this._instance) {
            this._instance = new HttpManager()
        }
        return this._instance;
    }

    private callBackDic: Map<number, Function>
    constructor() {
        this.callBackDic = new Map();
    }

    /**
     * 发送http请求
     * @param data 请求数据 
     * @param callback 请求回调
     * @param method 强求类型 默认GET
     */
    sendMessage(data: object, callback: Function, method: string = egret.HttpMethod.GET): void {
        let dataStr: string = JSON.stringify(data);
        if (method == egret.HttpMethod.GET) {
            Config.url += "?jsonBody=" + dataStr;
        }

        let request: egret.HttpRequest = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(Config.url, method);
        request.addEventListener(egret.Event.COMPLETE, this.completeHandler, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.progressHandler, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.errorHandler, this);
        request.send(dataStr);

        this.callBackDic.set(request.hashCode, callback);
    }

    private completeHandler(evt: egret.Event): void {
        console.log("收到http数据");
        let request: egret.HttpRequest = evt.target as egret.HttpRequest;
        let data: Object = JSON.parse(request.response);

        let backFun: Function = this.callBackDic.get(request.hashCode);
        this.callBackDic.delete(request.hashCode);
        backFun(data);
    }

    private progressHandler(evt: egret.ProgressEvent): void {
        egret.log("post progress : " + Math.floor(100 * evt.bytesLoaded / evt.bytesTotal) + "%");
    }

    private errorHandler(evt: egret.IOErrorEvent): void {
        egret.log("post error : " + evt);
    }
}