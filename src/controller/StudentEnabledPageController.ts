class StudentEnabledPageController {

    private _studentEnabledPage: StudentEnabledPage;
    public get studentEnabledPage(): StudentEnabledPage {
        return this._studentEnabledPage;
    }
    public set studentEnabledPage(v: StudentEnabledPage) {
        this._studentEnabledPage = v;
        this.init();
    }
    public arrayCollection: eui.ArrayCollection;
    private infoList: StudentItemData[] = [];

    constructor() {

    }

    init() {
        this.studentEnabledPage.exml_scroller.horizontalScrollBar.autoVisibility = false;
        this.studentEnabledPage.exml_scroller.horizontalScrollBar.visible = false;
        this.studentEnabledPage.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.studentEnabledPage.exml_scroller.verticalScrollBar.visible = false;

        this.arrayCollection = new eui.ArrayCollection(this.infoList);
        this.studentEnabledPage.exml_scrollerList.useVirtualLayout = true;
        this.studentEnabledPage.exml_scrollerList.itemRenderer = StudentItem;
        this.studentEnabledPage.exml_scrollerList.dataProvider = this.arrayCollection;

        this.requestData();
    }

    requestData() {
        // HttpManager.instance.sendMessage(null, (res) => {
        for (let item of temp) {
            this.infoList.push(new StudentItemData(item));
        }
        this.arrayCollection.replaceAll(this.infoList);
        // }, this);
    }
}






// 模拟数据
let temp = [{
    exml_xueYuanBianHao: "1549",
    exml_tip: "正常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "异常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "正常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "异常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "正常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "异常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "正常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "异常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "正常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "异常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "正常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}, {
    exml_xueYuanBianHao: "1549",
    exml_tip: "异常",
    exml_icon: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
    exml_yongHuMing: "小花",
    exml_zongPaoLiang: "3125/3437",
    exml_zongJiaoFei: "99.99",
    exml_zuiHouXiaDan: "2020-7-15",
    exml_zuiHouJiaoFei: "2020-8-1",
    exml_beiZhu: "这是个啥",
    exml_jiaRuRiQi: "2001-1-1"
}]