/**
 * 用户信息
 */
class UserPageData {

    public userOpenid: number = 0;
    public userId: number = 0;
    public userLeavel: number = 0;
    public exml_bianHao: string = "";
    public exml_touXiang: string = "";
    public exml_yongHuMingCheng: string = "";
    public exml_wenXinTiShi: string = "1、本平台永久免费开号、预先跑量。\n2、系统定期自动禁用疑似逃费账号。";
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
        userOpenid: "userOpenid",
        userLeavel: "userLeavel",
        exml_bianHao: "userId",
        exml_touXiang: "userHead",
        exml_yongHuMingCheng: "userName",
        exml_wenXinTiShi: "exml_wenXinTiShi",
        exml_kaiHaoMingE: "exml_kaiHaoMingE",
        exml_daiShenHe: "countMyTeamWaite",
        exml_yiKaiTong: "countMyTeamNormal",
        exml_yiJinYong: "countMyTeamDisable",
        exml_zhangHuYuE: "exml_zhangHuYuE",
        exml_paoliangText1: "today",
        exml_paoliangText2: "yesterday",
        exml_paoliangText3: "surplus"
    }

    constructor(value) {
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                if (typeof value[this.propertyMap[i]] == "string" && value[this.propertyMap[i]] == "") {
                    continue;
                }
                this[i] = value[this.propertyMap[i]];
            }
        }

        this.exml_kaiHaoMingE = this.exml_kaiHaoMingE + "人";
        this.exml_zhangHuYuE = "账户余额：￥" + this.exml_zhangHuYuE;
        this.userId = Number(this.exml_bianHao);
        if (this.userLeavel == 1) {
            this.exml_bianHao = "员工编号：" + this.exml_bianHao;
        } else if (this.userLeavel == 2) {
            this.exml_bianHao = "组长编号：" + this.exml_bianHao;
        }
        this.exml_kaiHaoMingE = "" + (Number(this.exml_daiShenHe) + Number(this.exml_yiKaiTong) + Number(this.exml_yiJinYong));

        Global.USER_INFO = this;
    }
}

// new UserPageData({
//     exml_bianHao: "10002",
//     exml_touXiang: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
//     exml_yongHuMingCheng: "小明",
//     exml_wenXinTiShi: "1、本平台永久免费开号、预先跑量。\n2、系统定期自动禁用疑似逃费账号。\n3、客服QQ：*********",
//     exml_kaiHaoMingE: "99999",
//     exml_daiShenHe: 123,
//     exml_yiKaiTong: 456,
//     exml_yiJinYong: 789,
//     exml_zhangHuYuE: "88.88",
//     exml_paoliangText1: 234,
//     exml_paoliangText2: 234,
//     exml_paoliangText3: 234
// });