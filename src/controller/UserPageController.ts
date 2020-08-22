class UserPageController extends BaseController {

    private _displayView: UserPage;
    /**显示视图 */
    public get displayView(): UserPage {
        return this._displayView;
    }
    public set displayView(v: UserPage) {
        this._displayView = v;
        this.init();
    }

    constructor() {
        super();
    }

    init() {
        this.displayView.exml_bg.height = Global.STAGE_HEIGHT;
        this.displayView.exml_touXiang.mask = this.displayView.exml_iconMask;

        this.requestData();
    }

    requestData() {
        if (Global.USER_INFO != null) {
            this.dataModel = Global.USER_INFO;
            this.beforUpdateView();
            return;
        }
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.USER_PAGE, { code: Global.GET_URL_PARAM['code'], invitationId: Global.GET_URL_PARAM['invitationId'] }, (res) => {
            new UserPageData(res.data);
            this.dataModel = Global.USER_INFO;
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        // 特殊处理部分lab
        this.dataModel.exml_kaiHaoMingE = "" + this.dataModel.exml_kaiHaoMingE;
        this.dataModel.exml_zhangHuYuE = "" + this.dataModel.exml_zhangHuYuE;
        this.dataModel.exml_bianHao = "" + this.dataModel.exml_bianHao;

        if (this.dataModel.userLeavel == 1) {
            this.displayView.exml_infoGroup.removeChild(this.displayView.exml_item3);
            this.displayView.exml_infoGroup.removeChild(this.displayView.exml_item4);
        }

        this.updateView(this.displayView);
    }
}