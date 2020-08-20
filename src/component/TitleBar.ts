class TitleBar extends eui.Component {
    public exml_home: eui.Image;
    public exml_titleText: eui.Label;
    public exml_set: eui.Image;

    constructor() {
        super();
        this.skinName = "TitleBarSkin";
    }

    createChildren() {
        super.createChildren();

        this.exml_home.addEventListener(egret.TouchEvent.TOUCH_TAP, this.homeTouchHandler, this);
        this.exml_set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setTouchHandler, this);
    }

    homeTouchHandler(e: egret.TouchEvent) {
        console.log("主页");
        LayerManager.instance.showPage(PagesIndex.USER);
    }

    setTouchHandler(e: egret.TouchEvent) {
        console.log("设置");
        // LayerManager.instance.showPage(PagesIndex.SET);
    }
}