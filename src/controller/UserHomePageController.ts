class UserHomePageController {

    private _userHomePage: UserHomePage;
    public get userHomePage(): UserHomePage {
        return this._userHomePage;
    }
    public set userHomePage(v: UserHomePage) {
        this._userHomePage = v;
        this.init();
    }

    constructor() {

    }

    init() {
        this.userHomePage.exml_infoGroup.removeChild(this.userHomePage.exml_item3);
        this.userHomePage.exml_infoGroup.removeChild(this.userHomePage.exml_item4);
    }

    request() {
        HttpManager.instance.sendMessage(null, () => {

        }, this);
    }
}