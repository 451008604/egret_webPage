class UserPage extends BaseScene {
    public exml_bianHao: eui.Label;
    public exml_touXiang: eui.Image;
    public exml_iconMask: eui.Rect;
    public exml_yongHuMingCheng: eui.Button;
    public exml_wenXinTiShi: eui.Label;
    public exml_woYaoJiaoFei: eui.Group;
    public exml_jiaoFeiJiLu: eui.Group;
    public exml_yaoQingHaoYou: eui.Group;
    public exml_openQuota: eui.Label;
    public exml_daiShenHe: eui.Label;
    public exml_yiKaiTong: eui.Label;
    public exml_yiJinYong: eui.Label;
    public exml_zhangHuYuE: eui.Label;
    public exml_shenQingTiXian: eui.Label;
    public exml_tiXianJiLu: eui.Label;
    public exml_tiChengJiLu: eui.Label;
    public exml_paoLiangJiLu: eui.Group;
    public exml_paoliangText1: eui.Label;
    public exml_paoliangText2: eui.Label;
    public exml_paoliangText3: eui.Label;

    constructor() {
        super();
        this.skinName = "UserPageSkin";
    }

    createChildren() {
        super.createChildren();

        this.show();

        this.exml_touXiang.mask = this.exml_iconMask;
        this.exml_bianHao.text = "组长编号：";
        this.exml_zhangHuYuE.text = "账户余额：￥";
    }
}