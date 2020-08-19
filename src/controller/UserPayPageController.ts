class UserPayPageController extends BaseController {
    constructor() {
        super();
    }

    init() {
        let displayView = (this.displayView as UserPayPage);
        displayView.exml_titleBar.exml_set.visible = false;
        displayView.exml_inputText.text = "在此输入交费金额";

        this.requestData();
    }

    requestData() {
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.USER_PAY_PAGE, { money: Global.GET_URL_PARAM['code'], openId: Global.GET_URL_PARAM['invitationId'], ip: Global.GET_URL_PARAM['invitationId'] }, (res) => {
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
            });
            this.dataModel = Global.USER_INFO;
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {

    }
}