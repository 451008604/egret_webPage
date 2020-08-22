class HttpManager {
    private static _instance: HttpManager;
    static get instance(): HttpManager {
        if (!this._instance) {
            this._instance = new HttpManager()
        }
        return this._instance;
    }

    constructor() {
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
        let param = null;
        let requestUrl = Global.URL;
        requestUrl += "" + portName;
        let str = "?";
        for (let i in data) {
            str += (i + "=" + data[i] + "&");
        }
        if (method == egret.HttpMethod.GET) {
            requestUrl += "" + str.slice(0, str.length - 1);
        } else if (method == egret.HttpMethod.POST) {
            param = "" + str.slice(1, str.length - 1);
        } else {
            return;
        }

        let requestSuccessHandler = function (res: egret.Event) {
            let request: egret.HttpRequest = res.currentTarget as egret.HttpRequest;
            if (request.response) {
                let data: Object = JSON.parse(request.response);
                callback.bind(thisObj);
                callback(data);
            }
        }

        let progressHandler = function (evt: egret.ProgressEvent) {
            egret.log("post progress : " + Math.floor(100 * evt.bytesLoaded / evt.bytesTotal) + "%");
        }

        let errorHandler = function (evt: egret.IOErrorEvent) {
            egret.log("post error : " + evt);
        }

        let request: egret.HttpRequest = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(requestUrl, method);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.addEventListener(egret.Event.COMPLETE, requestSuccessHandler, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, progressHandler, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, errorHandler, this);
        request.send(param);
    }
}