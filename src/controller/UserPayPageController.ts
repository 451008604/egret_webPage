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
        this.displayView.exml_titleBar.exml_set.visible = false;
        this.displayView.exml_inputText.text = "在此输入交费金额（元）";
    }

    requestData() {
        if (isNaN(Number(this.displayView.exml_inputText.text))) {
            this.displayView.addChild(new TipView("请输入交费金额", ANIMATION_TYPE.SCALE_STAY_UP, false));
            return;
        }
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.USER_PAY_PAGE, { money: this.displayView.exml_inputText.text, openId: Global.USER_INFO.userOpenid, ip: window['returnCitySN']['cip'] }, (res) => {
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
        this.displayView.addChild(new TipView("支付成功", ANIMATION_TYPE.SCALE_STAY, false, () => {
            LayerManager.instance.showPage(PagesIndex.USER);
        }, this));
    }
}
// exml_bianHao: "组长编号：3"
// exml_daiShenHe: 0
// exml_kaiHaoMingE: "0"
// exml_paoliangText1: 0
// exml_paoliangText2: 0
// exml_paoliangText3: 0
// exml_touXiang: "http://thirdwx.qlogo.cn/mmopen/vi_32/IGfpOxS2N8XCFKXJZA5fatmaAmtwekL8iafnKqyQicSUQawUics6Grr9lOuthIMUibyPosPgWNias02bs3licBCdZWtg/132"
// exml_wenXinTiShi: "1、本平台永久免费开号、预先跑量。↵2、系统定期自动禁用疑似逃费账号。"
// exml_yiJinYong: 0
// exml_yiKaiTong: 0
// exml_yongHuMingCheng: "little Star."
// exml_zhangHuYuE: "账户余额：￥"
// propertyMap: {userOpenid: "userOpenid", userLeavel: "userLeavel", exml_bianHao: "userId", exml_touXiang: "userHead", exml_yongHuMingCheng: "userName", …}
// userId: 3
// userLeavel: "2"
// userOpenid: "oEbYe6KgXlz7xVla_U8dlq-kmil0"