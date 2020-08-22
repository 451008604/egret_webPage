class PayingPageController extends BaseController {

    private _displayView:PayingPage;
    /**显示视图 */
    public get displayView():PayingPage {
        return this._displayView;
    }
    public set displayView(v:PayingPage) {
        this._displayView = v;
        this.init();
    }

    public arrayCollection: eui.ArrayCollection;
    private infoList: PayingItemData[] = [];

    constructor() {
        super();
    }

    init() {
        this.displayView.exml_scroller.horizontalCenter.autoVisibility = false;
        this.displayView.exml_scroller.horizontalCenter.visible = false;
        this.displayView.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.verticalScrollBar.visible = false;

        this.arrayCollection = new eui.ArrayCollection(this.infoList);
        this.displayView.exml_scrollerList.useVirtualLayout = true;
        this.displayView.exml_scrollerList.itemRenderer = PayingItem;
        this.displayView.exml_scrollerList.dataProvider = this.arrayCollection;

        this.requestData();
    }

    requestData() {
        // HttpManager.instance.sendMessage(null, (res) => {
        this.infoList.splice(0, this.infoList.length);
        for (let item of payingTempList) {
            this.infoList.push(new PayingItemData(item));
        }
        this.beforUpdateView();
        // }, this);
    }

    beforUpdateView() {

    }
}

let payingTempList = [{
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}, {
    exml_shiJian: `${new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate()}`,
    exml_tip: "交费 - 已付款",
    exml_beiZhu: "交费金额",
    exml_yueDuCiShu: "5.00元"
}]