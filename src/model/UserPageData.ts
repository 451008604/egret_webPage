/**
 * 用户信息
 */
class UserPageData {

    public userId: number = 1;
    public exml_bianHao: string = "";
    public exml_touXiang: string = "";
    public exml_yongHuMingCheng: string = "";
    public exml_wenXinTiShi: string = "";
    public exml_kaiHaoMingE: string = "";
    public exml_daiShenHe: number = 0;
    public exml_yiKaiTong: number = 0;
    public exml_yiJinYong: number = 0;
    public exml_zhangHuYuE: string = "";
    public exml_paoliangText1: number = 0;
    public exml_paoliangText2: number = 0;
    public exml_paoliangText3: number = 0;

    /**映射服务端响应的数据字段 */
    propertyMap = {
        userId: "userId",
        exml_bianHao: "exml_bianHao",
        exml_touXiang: "exml_touXiang",
        exml_yongHuMingCheng: "exml_yongHuMingCheng",
        exml_wenXinTiShi: "exml_wenXinTiShi",
        exml_kaiHaoMingE: "exml_kaiHaoMingE",
        exml_daiShenHe: "exml_daiShenHe",
        exml_yiKaiTong: "exml_yiKaiTong",
        exml_yiJinYong: "exml_yiJinYong",
        exml_zhangHuYuE: "exml_zhangHuYuE",
        exml_paoliangText1: "today",
        exml_paoliangText2: "yesterday",
        exml_paoliangText3: "surplus"
    }

    constructor(value) {
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                this[i] = value[this.propertyMap[i]];
            }
        }

        GlobalCfg.instance.UserInfo = this;
    }
}