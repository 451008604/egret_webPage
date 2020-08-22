class OrderFromPageController extends BaseController {

    private _displayView:OrderFromPage;
    /**显示视图 */
    public get displayView():OrderFromPage {
        return this._displayView;
    }
    public set displayView(v:OrderFromPage) {
        this._displayView = v;
        this.init();
    }

    public arrCollection: eui.ArrayCollection;
    private infoList: OrderFromItemData[] = [];

    private pageIndex: number = 0;
    public type: number = 0;

    constructor() {
        super();
    }

    init() {
        this.displayView.exml_titleBar.exml_titleText.text = "我的订单 - 所有状态";
        this.displayView.exml_scroller.horizontalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.horizontalScrollBar.visible = false;
        this.displayView.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.verticalScrollBar.visible = false;

        this.arrCollection = new eui.ArrayCollection(this.infoList);
        this.displayView.exml_scrollerList.useVirtualLayout = true;
        this.displayView.exml_scrollerList.itemRenderer = OrderFromItem;
        this.displayView.exml_scrollerList.dataProvider = this.arrCollection;
        this.displayView.exml_scroller.addEventListener(eui.UIEvent.CHANGE_END, (res) => {
            if (this.displayView.exml_scroller.viewport.scrollV + this.displayView.exml_scroller.viewport.height >= this.displayView.exml_scroller.viewport.contentHeight) {
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