class UserPageController extends BaseController {

    constructor() {
        super();
    }

    init() {
        let displayView = (this.displayView as UserPage);
        displayView.exml_bg.height = Global.STAGE_HEIGHT;
        displayView.exml_touXiang.mask = displayView.exml_iconMask;

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
        this.dataModel.exml_kaiHaoMingE = this.dataModel.exml_kaiHaoMingE + "人";
        this.dataModel.exml_zhangHuYuE = "账户余额：￥" + this.dataModel.exml_zhangHuYuE;

        if (this.dataModel.userLeavel == 1) {
            this.dataModel.exml_bianHao = "员工编号：" + this.dataModel.exml_bianHao;
            this.displayView.exml_infoGroup.removeChild(this.displayView.exml_item3);
            this.displayView.exml_infoGroup.removeChild(this.displayView.exml_item4);
        } else if (this.dataModel.userLeavel == 2) {
            this.dataModel.exml_bianHao = "组长编号：" + this.dataModel.exml_bianHao;
        }

        this.updateView(this.displayView);
    }
}