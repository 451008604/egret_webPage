class StudentEnabledPage extends BaseScene {
    public exml_bg: eui.Rect;
    public exml_titleBar: TitleBar;
    public exml_submit: eui.Button;
    public exml_clean: eui.Button;
    public exml_textInput: eui.TextInput;
    public exml_scroller: eui.Scroller;
    public exml_scrollerList: eui.List;

    public studentEnabledPageController: StudentEnabledPageController = new StudentEnabledPageController();
    constructor() {
        super();
        this.skinName = "StudentEnabledPageSkin";
    }

    show() {
        super.show();

        this.studentEnabledPageController.displayView = this;

        this.exml_submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitTouchHandler, this);
        this.exml_clean.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cleanTouchHandler, this);
    }

    senMsg() {

    }

    private submitTouchHandler(e: egret.TouchEvent) {
        console.log("搜索");
        this.studentEnabledPageController.selectData(this.exml_textInput.text);
        this.studentEnabledPageController.arrayCollection.refresh()
    }

    private cleanTouchHandler(e: egret.TouchEvent) {
        console.log("清除");
        this.exml_textInput.text = "";

        this.studentEnabledPageController.pageIndex = 1;
        this.studentEnabledPageController.infoList.splice(0);
        this.studentEnabledPageController.requestData();
    }
}