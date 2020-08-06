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
        this.exml_xueYuanBianHao = "学员编号：" + this.exml_xueYuanBianHao;
        this.exml_zongPaoLiang = "总跑量：" + this.exml_zongPaoLiang;
        this.exml_zongJiaoFei = "总交费：￥" + this.exml_zongJiaoFei;
        this.exml_zuiHouXiaDan = "最后下单：" + this.exml_zuiHouXiaDan;
        this.exml_zuiHouJiaoFei = "最后交费：" + this.exml_zuiHouJiaoFei;
        this.exml_beiZhu = "备注：" + this.exml_beiZhu;
        this.exml_jiaRuRiQi = "加入日期：" + this.exml_jiaRuRiQi;
    }
}