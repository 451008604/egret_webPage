class OrderFromPageController extends BaseController {

    private _displayView: OrderFromPage;
    /**显示视图 */
    public get displayView(): OrderFromPage {
        return this._displayView;
    }
    public set displayView(v: OrderFromPage) {
        this._displayView = v;
        this.init();
    }

    public arrayCollection: eui.ArrayCollection;
    private infoList: OrderFromItemData[] = [];

    private pageIndex: number = 1;
    public type: number = 0;

    constructor() {
        super();
    }

    init() {
        let titTxt: string = "";
        if (this.type == 1) {
            titTxt = "今日跑量";
        } else if (this.type == 2) {
            titTxt = "昨日跑量";
        } else if (this.type == 3) {
            titTxt = "剩余需求";
        } else {
            titTxt = "跑量记录";
        }
        this.displayView.exml_titleBar.exml_titleText.text = "" + titTxt;
        this.displayView.exml_titleBar.exml_set.visible = false;
        this.displayView.exml_scroller.horizontalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.horizontalScrollBar.visible = false;
        this.displayView.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.verticalScrollBar.visible = false;
        this.displayView.exml_scrollerList.height = Global.STAGE_HEIGHT - this.displayView.exml_scroller.y;

        this.arrayCollection = new eui.ArrayCollection(this.infoList);
        this.displayView.exml_scrollerList.useVirtualLayout = true;
        this.displayView.exml_scrollerList.itemRenderer = OrderFromItem;
        this.displayView.exml_scrollerList.dataProvider = this.arrayCollection;
        this.displayView.exml_scroller.addEventListener(eui.UIEvent.CHANGE_END, (res) => {
            if (this.displayView.exml_scroller.viewport.scrollV + this.displayView.exml_scroller.viewport.height >= this.displayView.exml_scroller.viewport.contentHeight) {
                this.pageIndex++;
                this.requestData();
            }
        }, this);

        if (this.type == 1 || this.type == 2 || this.type == 3) {
            this.requestData();
        } else {
            this.requestHistoryData();
        }
    }

    // 获取昨日、今日、剩余  数据
    requestData() {
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.ORDER_FROM_PAGE, { userId: Global.USER_INFO.userId, page: this.pageIndex, type: this.type }, (res) => {
            for (let item of res.data.listAdress) {
                this.infoList.push(new OrderFromItemData(item));
            }
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    // 获取总记录数据
    requestHistoryData() {
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.ORDER_FROM_PAGE_HISTORY, { userId: Global.USER_INFO.userId, page: this.pageIndex }, (res) => {
            for (let item of res.data.listAdress) {
                this.infoList.push(new OrderFromItemData(item));
            }
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.arrayCollection.replaceAll(this.infoList);
    }
}