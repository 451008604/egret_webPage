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

    stageHeight: number = 0;
    stageWidth: number = 0;

    /**用户信息 */
    UserInfo: UserPageData;
}