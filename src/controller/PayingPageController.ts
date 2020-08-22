class PayingPageController extends BaseController {

    private _displayView: PayingPage;
    /**显示视图 */
    public get displayView(): PayingPage {
        return this._displayView;
    }
    public set displayView(v: PayingPage) {
        this._displayView = v;
        this.init();
    }

    public arrayCollection: eui.ArrayCollection;
    private infoList: PayingItemData[] = [];
    private pageIndex: number = 0;

    constructor() {
        super();
    }

    init() {
        this.displayView.exml_titleBar.exml_titleText.text = "交费记录";
        this.displayView.exml_titleBar.exml_set.visible = false;
        this.displayView.exml_scroller.horizontalCenter.autoVisibility = false;
        this.displayView.exml_scroller.horizontalCenter.visible = false;
        this.displayView.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.verticalScrollBar.visible = false;

        this.arrayCollection = new eui.ArrayCollection(this.infoList);
        this.displayView.exml_scrollerList.useVirtualLayout = true;
        this.displayView.exml_scrollerList.itemRenderer = PayingItem;
        this.displayView.exml_scrollerList.dataProvider = this.arrayCollection;
        this.displayView.exml_scroller.addEventListener(eui.UIEvent.CHANGE_END, (res) => {
            if (this.displayView.exml_scroller.viewport.scrollV + this.displayView.exml_scroller.viewport.height >= this.displayView.exml_scroller.viewport.contentHeight) {
                this.pageIndex++;
                this.requestData();
            }
        }, this);

        this.requestData();
    }

    requestData() {
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.USER_PAYING, { userId: Global.USER_INFO.userId, page: this.pageIndex }, (res) => {
            for (let item of res.data.listHistory) {
                this.infoList.push(new PayingItemData(item));
            }
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.arrayCollection.replaceAll(this.infoList);
    }
}