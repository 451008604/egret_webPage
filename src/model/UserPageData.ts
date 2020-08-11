class UserPageData {

    public exml_bianHao: string = "10002";
    public exml_touXiang: string = "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg";
    public exml_yongHuMingCheng: string = "小明";
    public exml_wenXinTiShi: string = "1、本平台永久免费开号、预先跑量。\n2、系统定期自动禁用疑似逃费账号。\n3、客服QQ：*********";
    public exml_kaiHaoMingE: string = "99999";
    public exml_daiShenHe: number = 123;
    public exml_yiKaiTong: number = 456;
    public exml_yiJinYong: number = 789;
    public exml_zhangHuYuE: string = "88.88";
    public exml_paoliangText1: number = 234;
    public exml_paoliangText2: number = 234;
    public exml_paoliangText3: number = 234;

    /**映射服务端响应的数据字段 */
    propertyMap = {
        exml_bianHao: "exml_bianHao",
        exml_touXiang: "exml_touXiang",
        exml_yongHuMingCheng: "exml_yongHuMingCheng",
        exml_wenXinTiShi: "exml_wenXinTiShi",
        exml_kaiHaoMingE: "exml_kaiHaoMingE",
        exml_daiShenHe: "exml_daiShenHe",
        exml_yiKaiTong: "exml_yiKaiTong",
        exml_yiJinYong: "exml_yiJinYong",
        exml_zhangHuYuE: "exml_zhangHuYuE",
        exml_paoliangText1: "exml_paoliangText1",
        exml_paoliangText2: "exml_paoliangText2",
        exml_paoliangText3: "exml_paoliangText3"
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