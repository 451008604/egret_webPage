class StudentEnabledPageController extends BaseController {

    private _displayView: StudentEnabledPage;
    /**显示视图 */
    public get displayView(): StudentEnabledPage {
        return this._displayView;
    }
    public set displayView(v: StudentEnabledPage) {
        this._displayView = v;
        this.init();
    }

    public arrayCollection: eui.ArrayCollection;
    private infoList: StudentItemData[] = [];
    private pageIndex: number = 0;
    public type: number = 0;
    private maxPage: number = 0;

    constructor() {
        super();
    }

    init() {
        this.displayView.exml_titleBar.exml_titleText.text = "";
        this.displayView.exml_titleBar.exml_set.visible = false;
        this.displayView.exml_scroller.horizontalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.horizontalScrollBar.visible = false;
        this.displayView.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.displayView.exml_scroller.verticalScrollBar.visible = false;

        this.arrayCollection = new eui.ArrayCollection(this.infoList);
        this.displayView.exml_scrollerList.useVirtualLayout = true;
        this.displayView.exml_scrollerList.itemRenderer = StudentItem;
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
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.STUDENT_ENABLED_PAGE, { userId: Global.USER_INFO.userId, page: this.pageIndex, type: this.type }, (res) => {
            for (let item of res.data.listUser) {
                this.infoList.push(new StudentItemData(item));
            }
            this.beforUpdateView();

            if (res.pCount)
                this.maxPage = res.pCount;
            if (this.displayView.exml_titleBar.exml_titleText.text == "") {
                this.getTotalUserNum();
            }
        }, this, egret.HttpMethod.POST);
    }

    getTotalUserNum() {
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.STUDENT_ENABLED_PAGE, { userId: Global.USER_INFO.userId, page: this.maxPage, type: this.type }, (res) => {
            let titTxt: string = "";
            if (this.type == 1) {
                titTxt = "待审核";
            } else if (this.type == 2) {
                titTxt = "已开通";
            } else if (this.type == 3) {
                titTxt = "已禁用";
            }
            this.displayView.exml_titleBar.exml_titleText.text = "" + titTxt + " - " + (this.maxPage * 10 + res.data.listUser.length) + "人";
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.arrayCollection.replaceAll(this.infoList);
    }
}