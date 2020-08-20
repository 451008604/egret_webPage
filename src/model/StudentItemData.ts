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
        exml_xueYuanBianHao: "userId",
        exml_tip: "userLabel",
        exml_icon: "headUrl",
        exml_yongHuMing: "userName",
        exml_zongPaoLiang: "test5",
        exml_zongJiaoFei: "money",
        exml_zuiHouXiaDan: "endAdressTime",
        exml_zuiHouJiaoFei: "endMoneyTime",
        exml_beiZhu: "test9",
        exml_jiaRuRiQi: "test10"
    }

    constructor(value) {
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                this[i] = value[this.propertyMap[i]];
            }
        }

        if (Number(this.exml_tip) == 1) {
            this.exml_tip = "未审核";
        } else if (Number(this.exml_tip) == 2) {
            this.exml_tip = "正常";
        } else if (Number(this.exml_tip) == 3) {
            this.exml_tip = "禁用";
        }
    }
}