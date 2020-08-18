class GlobalCfg {

    private static _instance: GlobalCfg = null;
    public static get instance() {
        if (!this._instance) {
            this._instance = new GlobalCfg();
        }
        return this._instance;
    }
    constructor() {

    }

    // 舞台高度
    stageHeight: number = 0;
    // 舞台宽度
    stageWidth: number = 0;

    /**用户信息 */
    UserInfo: UserPageData;

    /**获取地址栏参数 */
    get getUrlParam() {
        let url = window.location.search.split("&");
        url[0] = url[0].replace("?", "");
        let json = {};
        for (let i = 0; i < url.length; i++) {
            let temp = url[i].split("=");
            json[temp[0]] = temp[1];
        }
        return json;
    }
}