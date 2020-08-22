/**
 * 交费信息
 */
class PayingItemData {

    public exml_shiJian: string = "";
    public exml_tip: string = "已付款";
    public exml_beiZhu: string = "";
    public exml_jiaoFeiJinE: string = "";

    propertyMap = {
        exml_shiJian: "historyTime",
        exml_tip: "exml_tip",
        exml_beiZhu: "orderNumber",
        exml_jiaoFeiJinE: "money"
    }

    constructor(value) {
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                this[i] = value[this.propertyMap[i]];
            }
        }
    }
}