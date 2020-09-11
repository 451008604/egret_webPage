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
        this.displayView.exml_inputText.inputType = egret.TextFieldInputType.TEL;
    }

    requestData() {
        let _self = this;
        if (isNaN(Number(this.displayView.exml_inputText.text))) {
            this.displayView.addChild(new TipView("请输入交费金额", ANIMATION_TYPE.SCALE_STAY_UP, false));
            return;
        }
        this.displayView.exml_submitBtn.touchEnabled = false;
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.USER_PAY_PAGE, { money: this.displayView.exml_inputText.text, openId: Global.USER_INFO.userOpenid, ip: Global.returnCitySN.cip }, (res) => {
            function onBridgeReady() {
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', {
                    "appId": "" + res.appId,     //公众号名称，由商户传入
                    "timeStamp": "" + res.timeStamp,         //时间戳，自1970年以来的秒数
                    "nonceStr": "" + res.nonceStr, //随机串
                    "package": "" + res.package,
                    "signType": "" + res.signType,         //微信签名方式：
                    "paySign": "" + res.paySign //微信签名
                },
                    function (res) {
                        if (res.err_msg == "get_brand_wcpay_request:ok") {
                            // 使用以上方式判断前端返回,微信团队郑重提示：
                            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                            _self.beforUpdateView();
                        } else {
                            _self.displayView.addChild(new TipView("支付失败", ANIMATION_TYPE.SCALE_STAY, false));
                            _self.displayView.exml_submitBtn.touchEnabled = true;
                        }
                    });
            }
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                } else {
                    this.displayView.addChild(new TipView("当前环境不支持，请尝试在手机微信内访问", ANIMATION_TYPE.SCALE_STAY, false));
                }
                this.displayView.exml_submitBtn.touchEnabled = true;
            } else {
                onBridgeReady();
            }

        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.displayView.addChild(new TipView("支付成功", ANIMATION_TYPE.SCALE_STAY, false, () => {
            LayerManager.instance.showPage(PagesIndex.USER);
        }, this));
    }
}

let WeixinJSBridge;