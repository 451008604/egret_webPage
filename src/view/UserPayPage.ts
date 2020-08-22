class UserPayPage extends BaseScene {
    public exml_bg: eui.Rect;
    public exml_titleBar: TitleBar;
    public exml_inputText: eui.TextInput;
    public exml_submitBtn: eui.Button;

    private userPayPageController: UserPayPageController = new UserPayPageController();

    constructor() {
        super();
        this.skinName = "UserPayPageSkin";
    }

    show() {
        super.show();

        this.userPayPageController.displayView = this;

        this.exml_submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitBtnTouchHandler, this);
        this.exml_inputText.addEventListener(egret.FocusEvent.FOCUS_IN, this.inputTextFocusHandler, this);
        this.exml_inputText.addEventListener(egret.FocusEvent.FOCUS_OUT, this.inputTextFocusHandler, this);
    }

    private submitBtnTouchHandler() {
        console.log("立即支付");
        this.userPayPageController.requestData();
    }

    private inputTextFocusHandler(e: egret.FocusEvent) {
        if (e.type == egret.FocusEvent.FOCUS_IN) {
            if (this.exml_inputText.text == "在此输入交费金额（元）") {
                this.exml_inputText.text = "";
            }
        } else if (e.type == egret.FocusEvent.FOCUS_OUT) {
            if (isNaN(Number(this.exml_inputText.text)) || this.exml_inputText.text == "") {
                this.exml_inputText.text = "在此输入交费金额（元）";
            }
        }
    }

    senMsg() {

    }
}