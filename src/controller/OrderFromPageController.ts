class OrderFromPageController extends BaseController {

    public arrCollection: eui.ArrayCollection;
    private infoList: OrderFromItemData[] = [];

    private pageIndex: number = 0;
    public type: number = 0;

    constructor() {
        super();
    }

    init() {
        let displayView = (this.displayView as OrderFromPage);
        displayView.exml_titleBar.exml_titleText.text = "我的订单 - 所有状态";
        displayView.exml_scroller.horizontalScrollBar.autoVisibility = false;
        displayView.exml_scroller.horizontalScrollBar.visible = false;
        displayView.exml_scroller.verticalScrollBar.autoVisibility = false;
        displayView.exml_scroller.verticalScrollBar.visible = false;

        this.arrCollection = new eui.ArrayCollection(this.infoList);
        displayView.exml_scrollerList.useVirtualLayout = true;
        displayView.exml_scrollerList.itemRenderer = OrderFromItem;
        displayView.exml_scrollerList.dataProvider = this.arrCollection;
        displayView.exml_scroller.addEventListener(eui.UIEvent.CHANGE_END, (res) => {
            if (displayView.exml_scroller.viewport.scrollV + displayView.exml_scroller.viewport.height >= displayView.exml_scroller.viewport.contentHeight) {
                this.pageIndex++;
                this.requestData();
            }
        }, this);

        this.requestData();
    }

    requestData() {
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.ORDER_FROM_PAGE, { userId: Global.USER_INFO.userId, page: this.pageIndex, type: this.type }, (res) => {
            for (let item of res.data.listAdress) {
                this.infoList.push(new OrderFromItemData(item));
            }
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.arrCollection.replaceAll(this.infoList);
    }
}