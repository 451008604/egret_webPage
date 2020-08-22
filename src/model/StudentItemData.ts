/**
 * 学员信息
 */
class StudentItemData {

    public exml_xueYuanBianHao: string = null;
    public exml_tip: string = null;
    public exml_icon: string = null;
    public exml_yongHuMing: string = null;
    public exml_zongJiaoFei: string = null;
    public exml_zuiHouXiaDan: string = null;
    public exml_zuiHouJiaoFei: string = null;

    propertyMap = {
        exml_xueYuanBianHao: "userId",
        exml_tip: "userLabel",
        exml_icon: "headUrl",
        exml_yongHuMing: "userName",
        exml_zongJiaoFei: "money",
        exml_zuiHouXiaDan: "endAdressTime",
        exml_zuiHouJiaoFei: "endMoneyTime",
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