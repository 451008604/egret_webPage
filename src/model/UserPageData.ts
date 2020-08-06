class UserPageData {

    public exml_bianHao: string = "组长编号：10002";
    public exml_touXiang: string = "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg";
    public exml_yongHuMingCheng: string = "小明";
    public exml_wenXinTiShi: string = "1、本平台永久免费开号、预先跑量。\n2、系统定期自动禁用疑似逃费账号。\n3、客服QQ：*********";
    public exml_kaiHaoMingE: string = "99999人";
    public exml_daiShenHe: number = 123;
    public exml_yiKaiTong: number = 456;
    public exml_yiJinYong: number = 789;
    public exml_zhangHuYuE: string = "账户余额：￥88.88";
    public exml_paoliangText1: number = 234;
    public exml_paoliangText2: number = 234;
    public exml_paoliangText3: number = 234;

    private static _instance: UserPageData = null;
    public static get instance(): UserPageData {
        if (!this._instance) {
            this._instance = new UserPageData();
        }
        return this._instance;
    }

    /**映射服务端响应的数据字段 */
    propertyMap = {
        exml_bianHao: "",
        exml_touXiang: "",
        exml_yongHuMingCheng: "",
        exml_wenXinTiShi: "",
        exml_kaiHaoMingE: "",
        exml_daiShenHe: "",
        exml_yiKaiTong: "",
        exml_yiJinYong: "",
        exml_zhangHuYuE: "",
        exml_paoliangText1: "",
        exml_paoliangText2: "",
        exml_paoliangText3: ""
    }

    /**刷新数据 */
    setData(value: Object) {
        this.cleanData();
        for (let i in this.propertyMap) {
            if (value.hasOwnProperty(this.propertyMap[i])) {
                this[i] = value[this.propertyMap[i]];
            }
        }

        // 特殊处理部分lab
        this.exml_bianHao = "组长编号：" + this.exml_bianHao;
        this.exml_kaiHaoMingE = this.exml_kaiHaoMingE + "人";
        this.exml_zhangHuYuE = "账户余额：￥" + this.exml_zhangHuYuE;
    }

    cleanData() {
        this.exml_bianHao = "";
        this.exml_touXiang = "";
        this.exml_yongHuMingCheng = "";
        this.exml_wenXinTiShi = "";
        this.exml_kaiHaoMingE = "";
        this.exml_daiShenHe = 0;
        this.exml_yiKaiTong = 0;
        this.exml_yiJinYong = 0;
        this.exml_zhangHuYuE = "";
        this.exml_paoliangText1 = 0;
        this.exml_paoliangText2 = 0;
        this.exml_paoliangText3 = 0;
    }

}