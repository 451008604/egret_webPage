class UserHomePageController extends BaseController {

    private _userHomePage: UserHomePage;
    public get userHomePage(): UserHomePage {
        return this._userHomePage;
    }
    public set userHomePage(v: UserHomePage) {
        this._userHomePage = v;
        this.init();
    }

    constructor() {
        super();
    }

    init() {
        this.userHomePage.exml_infoGroup.removeChild(this.userHomePage.exml_item3);
        this.userHomePage.exml_infoGroup.removeChild(this.userHomePage.exml_item4);
        this.userHomePage.exml_bg.height = GlobalCfg.instance.stageHeight;
        this.userHomePage.exml_touXiang.mask = this.userHomePage.exml_iconMask;

        this.requestData();
    }

    requestData() {
        // HttpManager.instance.sendMessage(null, () => {
        new UserPageData({
            exml_bianHao: "10002",
            exml_touXiang: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
            exml_yongHuMingCheng: "小明",
            exml_wenXinTiShi: "1、本平台永久免费开号、预先跑量。\n2、系统定期自动禁用疑似逃费账号。\n3、客服QQ：*********",
            exml_kaiHaoMingE: "99999",
            exml_daiShenHe: 123,
            exml_yiKaiTong: 456,
            exml_yiJinYong: 789
        });
        this.dataModel = GlobalCfg.instance.UserInfo;
        this.beforUpdateView();
        // }, this);
    }

    beforUpdateView() {
        // 特殊处理部分lab
        this.dataModel.exml_bianHao = "学员编号：" + this.dataModel.exml_bianHao;
        this.dataModel.exml_kaiHaoMingE = this.dataModel.exml_kaiHaoMingE + "人";
        this.dataModel.exml_zhangHuYuE = "账户余额：￥" + this.dataModel.exml_zhangHuYuE;

        this.updateView(this.userHomePage);
    }
}