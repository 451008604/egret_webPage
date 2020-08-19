class UserHomePageController extends BaseController {

    constructor() {
        super();
    }

    init() {
        let displayView = (this.displayView as UserHomePage);
        displayView.exml_infoGroup.removeChild(displayView.exml_item3);
        displayView.exml_infoGroup.removeChild(displayView.exml_item4);
        displayView.exml_bg.height = Global.STAGE_HEIGHT;
        displayView.exml_touXiang.mask = displayView.exml_iconMask;

        this.requestData();
    }

    requestData() {
        HttpManager.instance.sendMessage("releaseAdressAction!getALLAmount.action", { userId: Global.USER_INFO.userId }, (res) => {
            new UserPageData(res);
            this.dataModel = Global.USER_INFO;
            this.beforUpdateView();
        }, this);
    }

    beforUpdateView() {
        // 特殊处理部分lab
        this.dataModel.exml_bianHao = "学员编号：" + this.dataModel.exml_bianHao;
        this.dataModel.exml_kaiHaoMingE = this.dataModel.exml_kaiHaoMingE + "人";
        this.dataModel.exml_zhangHuYuE = "账户余额：￥" + this.dataModel.exml_zhangHuYuE;

        this.updateView(this.displayView);
    }
}