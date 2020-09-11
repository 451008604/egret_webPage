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
    public infoList: StudentItemData[] = [];
    public pageIndex: number = 1;
    public static type: number = 0;
    private maxPage: number = 1;

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
        this.displayView.exml_scrollerList.height = Global.STAGE_HEIGHT - this.displayView.exml_scroller.y;

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
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.STUDENT_ENABLED_PAGE, { userId: Global.USER_INFO.userId, page: this.pageIndex, type: StudentEnabledPageController.type }, (res) => {
            for (let item of res.data.listUser) {
                this.infoList.push(new StudentItemData(item));
            }
            this.beforUpdateView();

            if (res.data.pCount > 0)
                this.maxPage = res.data.pCount;
            if (this.displayView.exml_titleBar.exml_titleText.text == "") {
                this.getTotalUserNum();
            }
        }, this, egret.HttpMethod.POST);
    }

    getTotalUserNum() {
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.STUDENT_ENABLED_PAGE, { userId: Global.USER_INFO.userId, page: this.maxPage, type: StudentEnabledPageController.type }, (res) => {
            let titTxt: string = "";
            if (StudentEnabledPageController.type == 1) {
                titTxt = "待审核";
            } else if (StudentEnabledPageController.type == 2) {
                titTxt = "已开通";
            } else if (StudentEnabledPageController.type == 3) {
                titTxt = "已禁用";
            }
            this.displayView.exml_titleBar.exml_titleText.text = "" + titTxt + " - " + ((this.maxPage - 1) * 10 + res.data.listUser.length) + "人";
        }, this, egret.HttpMethod.POST);
    }

    selectData(_param) {
        if (!_param || isNaN(Number(_param))) {
            this.displayView.addChild(new TipView("请输入学员编号", ANIMATION_TYPE.SCALE_STAY_UP));
            return;
        }
        HttpManager.instance.sendMessage(Global.INTERFACE_TYPE.STUDENT_SELECT, { userId: _param }, (res) => {
            if (res.success == "1") {
                this.displayView.addChild(new TipView("此学员不存在", ANIMATION_TYPE.SCALE_STAY_UP));
                return;
            }
            this.infoList.splice(0);
            this.infoList.push(new StudentSelectItemData(res.data));
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.arrayCollection.replaceAll(this.infoList);
    }
}