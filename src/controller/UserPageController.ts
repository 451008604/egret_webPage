class UserPageController {

    private _userPage: UserPage;
    public get userPage(): UserPage {
        return this._userPage;
    }
    public set userPage(v: UserPage) {
        this._userPage = v;
        this.init();
    }

    constructor() {

    }

    init() {
        this.userPage.exml_bg.height = GlobalCfg.instance.stageHeight;
        this.userPage.exml_touXiang.mask = this.userPage.exml_iconMask;

        // this.requestData();
        this.updateView();
    }

    requestData() {
        HttpManager.instance.sendMessage(null, (res) => {
            UserPageData.instance.setData(res);
            this.updateView();
        }, this);
    }

    updateView() {
        for (let i in UserPageData.instance) {
            if (this.userPage[i] instanceof eui.Label) {
                (this.userPage[i] as eui.Label).text = UserPageData.instance[i];
            }
            else if (this.userPage[i] instanceof eui.Image) {
                (this.userPage[i] as eui.Image).source = UserPageData.instance[i];
            }
            else if (this.userPage[i] instanceof eui.Button) {
                (this.userPage[i] as eui.Button).label = UserPageData.instance[i];
            }
        }
    }
}