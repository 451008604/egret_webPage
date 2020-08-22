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

    constructor() {
        super();
    }

    init() {
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
            // this.infoList.splice(0, this.infoList.length);
            for (let item of studentTempList) {
                this.infoList.push(new StudentItemData(item));
            }
            this.beforUpdateView();
        }, this, egret.HttpMethod.POST);
    }

    beforUpdateView() {
        this.arrayCollection.replaceAll(this.infoList);
    }
}






// 模拟数据
let studentTempList = [{
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}, {
    test1: "1549",
    test2: "正常",
    test3: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    test4: "小花",
    test5: "3125/3437",
    test6: "99.99",
    test7: "2020-7-15",
    test8: "2020-8-1",
    test9: "这是个啥",
    test10: "2001-1-1"
}]