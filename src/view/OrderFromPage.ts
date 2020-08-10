class OrderFromPage extends BaseScene {
    public exml_bg: eui.Rect;
    public exml_scroller: eui.Scroller;
    public exml_scrollerList: eui.List;

    public orderFromPageController: OrderFromPageController = new OrderFromPageController();
    constructor() {
        super();
        this.skinName = "OrderFromPageSkin";
    }

    show() {
        super.show();

        this.orderFromPageController.orderFromPage = this;
    }

    senMsg(): void {
        throw new Error("Method not implemented.");
    }

}