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
        exml_xueYuanBianHao: "exml_xueYuanBianHao",
        exml_tip: "exml_tip",
        exml_icon: "exml_icon",
        exml_yongHuMing: "exml_yongHuMing",
        exml_zongPaoLiang: "exml_zongPaoLiang",
        exml_zongJiaoFei: "exml_zongJiaoFei",
        exml_zuiHouXiaDan: "exml_zuiHouXiaDan",
        exml_zuiHouJiaoFei: "exml_zuiHouJiaoFei",
        exml_beiZhu: "exml_beiZhu",
        exml_jiaRuRiQi: "exml_jiaRuRiQi"
    }

    constructor(value) {
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                this[i] = value[this.propertyMap[i]];
            }
        }
    }
}