class OrderFromPageController {

    private _orderFromPage: OrderFromPage;
    public get orderFromPage(): OrderFromPage {
        return this._orderFromPage;
    }
    public set orderFromPage(v: OrderFromPage) {
        this._orderFromPage = v;
        this.init();
    }

    public arrCollection: eui.ArrayCollection;
    private infoList: OrderFromItemData[] = [];
    public count: number = 0;

    constructor() {
    }

    init() {
        this.orderFromPage.exml_scroller.horizontalScrollBar.autoVisibility = false;
        this.orderFromPage.exml_scroller.horizontalScrollBar.visible = false;
        this.orderFromPage.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.orderFromPage.exml_scroller.verticalScrollBar.visible = false;

        this.arrCollection = new eui.ArrayCollection(this.infoList);
        this.orderFromPage.exml_scrollerList.useVirtualLayout = true;
        this.orderFromPage.exml_scrollerList.itemRenderer = OrderFromItem;
        this.orderFromPage.exml_scrollerList.dataProvider = this.arrCollection;

        this.requestData();
    }

    requestData() {
        // HttpManager.instance.sendMessage(null, (res) => {
        for (let item of orderTempList) {
            this.infoList.push(new OrderFromItemData(item));
        }
        this.arrCollection.replaceAll(this.infoList);
        // }, this);
    }
}





let orderTempList = [{
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `${OrderFromPageController.prototype.count++}`,
    exml_yueDuCiShu: "123/456"
}]