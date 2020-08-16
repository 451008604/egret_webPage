class UserPageController extends BaseController {

    constructor() {
        super();
    }

    init() {
        let displayView = (this.displayView as UserPage);
        displayView.exml_bg.height = GlobalCfg.instance.stageHeight;
        displayView.exml_touXiang.mask = displayView.exml_iconMask;

        this.requestData();
    }

    requestData() {
        // HttpManager.instance.sendMessage(null, (res) => {
        new UserPageData({
            exml_bianHao: "10002",
            exml_touXiang: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
            exml_yongHuMingCheng: "小明",
            exml_wenXinTiShi: "1、本平台永久免费开号、预先跑量。\n2、系统定期自动禁用疑似逃费账号。\n3、客服QQ：*********",
            exml_kaiHaoMingE: "99999",
            exml_daiShenHe: 123,
            exml_yiKaiTong: 456,
            exml_yiJinYong: 789,
            exml_zhangHuYuE: "88.88",
            exml_paoliangText1: 234,
            exml_paoliangText2: 234,
            exml_paoliangText3: 234
        })
        this.dataModel = GlobalCfg.instance.UserInfo;
        this.beforUpdateView();
        // }, this);
    }

    beforUpdateView() {
        // 特殊处理部分lab
        this.dataModel.exml_bianHao = "组长编号：" + this.dataModel.exml_bianHao;
        this.dataModel.exml_kaiHaoMingE = this.dataModel.exml_kaiHaoMingE + "人";
        this.dataModel.exml_zhangHuYuE = "账户余额：￥" + this.dataModel.exml_zhangHuYuE;

        this.updateView(this.displayView);
    }
}