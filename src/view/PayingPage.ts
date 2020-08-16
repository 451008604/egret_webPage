class PayingPage extends BaseScene {
    public exml_bg: eui.Rect;
    public exml_titleBar: TitleBar;
    public exml_scroller: eui.Scroller;
    public exml_scrollerList: eui.List;

    private payingPageController: PayingPageController = new PayingPageController();
    constructor() {
        super();
        this.skinName = "PayingPageSkin";
    }

    show() {
        super.show();

        this.payingPageController.displayView = this;
    }

    senMsg(): void {

    }
}