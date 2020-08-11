/**
 * 订单信息
 */
class OrderFromItemData {

    public exml_shiJian: string = "";
    public exml_tip: string = "";
    public exml_biaoTi: string = "";
    public exml_beiZhu: string = "";
    public exml_yueDuCiShu: string = "";

    propertyMap = {
        exml_shiJian: "exml_shiJian",
        exml_tip: "exml_tip",
        exml_biaoTi: "exml_biaoTi",
        exml_beiZhu: "exml_beiZhu",
        exml_yueDuCiShu: "exml_yueDuCiShu"
    }

    constructor(value) {
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                this[i] = value[this.propertyMap[i]];
            }
        }
    }
}