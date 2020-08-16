class OrderFromPageController extends BaseController {

    public arrCollection: eui.ArrayCollection;
    private infoList: OrderFromItemData[] = [];

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

        this.requestData();
    }

    requestData() {
        // HttpManager.instance.sendMessage(null, (res) => {
        for (let item of orderTempList) {
            this.infoList.push(new OrderFromItemData(item));
        }
        this.beforUpdateView();
        // }, this);
    }

    beforUpdateView() {
        this.arrCollection.replaceAll(this.infoList);
    }
}





let orderTempList = [{
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}, {
    exml_shiJian: "2020-08-01",
    exml_tip: "已完成",
    exml_biaoTi: "测试标题",
    exml_beiZhu: `备注`,
    exml_yueDuCiShu: "123/456"
}]