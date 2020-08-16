class StudentEnabledPageController extends BaseController {

    public arrayCollection: eui.ArrayCollection;
    private infoList: StudentItemData[] = [];

    constructor() {
        super();
    }

    init() {
        let displayView = (this.displayView as StudentEnabledPage);
        displayView.exml_titleBar.exml_set.visible = false;
        displayView.exml_scroller.horizontalScrollBar.autoVisibility = false;
        displayView.exml_scroller.horizontalScrollBar.visible = false;
        displayView.exml_scroller.verticalScrollBar.autoVisibility = false;
        displayView.exml_scroller.verticalScrollBar.visible = false;

        this.arrayCollection = new eui.ArrayCollection(this.infoList);
        displayView.exml_scrollerList.useVirtualLayout = true;
        displayView.exml_scrollerList.itemRenderer = StudentItem;
        displayView.exml_scrollerList.dataProvider = this.arrayCollection;

        this.requestData();
    }

    requestData() {
        // HttpManager.instance.sendMessage(null, (res) => {
        this.infoList.splice(0, this.infoList.length);
        for (let item of studentTempList) {
            this.infoList.push(new StudentItemData(item));
        }
        this.beforUpdateView();
        // }, this);
    }

    beforUpdateView() {
        this.arrayCollection.replaceAll(this.infoList);
        this.updateView(this.displayView.exml_titleBar);
    }
}






// 模拟数据
let studentTempList = [{
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