class HomePage extends BaseScene {
    public exml_btn1: eui.Button;
    public exml_btn2: eui.Button;
    public exml_btn3: eui.Button;
    public exml_btn4: eui.Button;
    public exml_btn5: eui.Button;
    public exml_btn6: eui.Button;

    constructor() {
        super();
        this.skinName = "HomePageSkin";
    }

    show() {
        super.show();

        this.exml_btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exml_btn1TouchHandler, this);
        this.exml_btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exml_btn3TouchHandler, this);
        this.exml_btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exml_btn4TouchHandler, this);
        this.exml_btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exml_btn5TouchHandler, this);
        this.exml_btn6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exml_btn6TouchHandler, this);
    }

    private exml_btn1TouchHandler() {
        LayerManager.instance.showPage(PagesIndex.USER);
    }

    private exml_btn3TouchHandler() {
        LayerManager.instance.showPage(PagesIndex.STUDENT_ENABLED);
    }

    private exml_btn4TouchHandler() {
        LayerManager.instance.showPage(PagesIndex.ORDERFROM);
    }

    private exml_btn5TouchHandler() {
        LayerManager.instance.showPage(PagesIndex.USERPAY);
    }

    private exml_btn6TouchHandler() {
        LayerManager.instance.showPage(PagesIndex.PAYING);
    }

    senMsg(): void {

    }
}