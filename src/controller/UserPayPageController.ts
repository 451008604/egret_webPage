class UserPayPageController extends BaseController {

    private _displayView: UserPayPage;
    /**显示视图 */
    public get displayView(): UserPayPage {
        return this._displayView;
    }
    public set displayView(v: UserPayPage) {
        this._displayView = v;
        this.init();
    }

    constructor() {
        super();
    }

    init() {
        this.displayView.exml_titleBar.exml_titleText.text = "我要交费";
        this.displayView.exml_titleBar.exml_set.visible = false;
        this.displayView.exml_inputText.text = "在此输入交费金额（元）";
    }

    requestData() {
        if (isNaN(Number(this.displayView.exml_inputText.text))) {
            this.displayView.addChild(new TipView("请输入交费金额", ANIMATION_TYPE.SCALE_STAY_UP, false));
            return;
        }
        this.displayView.exml_submitBtn.touchEnabled = false;
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.USER_PAY_PAGE, { money: this.displayView.exml_inputText.text, openId: Global.USER_INFO.userOpenid, ip: window['returnCitySN']['cip'] }, (res) => {
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.displayView.addChild(new TipView("支付成功", ANIMATION_TYPE.SCALE_STAY, false, () => {
            LayerManager.instance.showPage(PagesIndex.USER);
        }, this));
    }
}