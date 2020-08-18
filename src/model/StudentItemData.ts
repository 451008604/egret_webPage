/**
 * 学员信息
 */
class StudentItemData {

    public exml_xueYuanBianHao: string = "";
    public exml_tip: string = "";
    public exml_icon: string = "";
    public exml_yongHuMing: string = "";
    public exml_zongPaoLiang: string = "";
    public exml_zongJiaoFei: string = "";
    public exml_zuiHouXiaDan: string = "";
    public exml_zuiHouJiaoFei: string = "";
    public exml_beiZhu: string = "";
    public exml_jiaRuRiQi: string = "";

    propertyMap = {
        exml_xueYuanBianHao: "test1",
        exml_tip: "test2",
        exml_icon: "test3",
        exml_yongHuMing: "test4",
        exml_zongPaoLiang: "test5",
        exml_zongJiaoFei: "test6",
        exml_zuiHouXiaDan: "test7",
        exml_zuiHouJiaoFei: "test8",
        exml_beiZhu: "test9",
        exml_jiaRuRiQi: "test10"
    }

    constructor(value) {
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                this[i] = value[this.propertyMap[i]];
            }
        }
    }
}