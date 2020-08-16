class UserPage extends BaseScene {
    public exml_bg: eui.Rect;
    public exml_bianHao: eui.Label;
    public exml_touXiang: eui.Image;
    public exml_iconMask: eui.Rect;
    public exml_yongHuMingCheng: eui.Button;
    public exml_infoGroup: eui.Group;
    public exml_item1: eui.Group;
    public exml_wenXinTiShi: eui.Label;
    public exml_item2: eui.Group;
    public exml_woYaoJiaoFei: eui.Group;
    public exml_jiaoFeiJiLu: eui.Group;
    public exml_item3: eui.Group;
    public exml_yaoQingHaoYou: eui.Group;
    public exml_kaiHaoMingE: eui.Label;
    public exml_checkPending: eui.Group;
    public exml_daiShenHe: eui.Label;
    public exml_enabled: eui.Group;
    public exml_yiKaiTong: eui.Label;
    public exml_disabled: eui.Group;
    public exml_yiJinYong: eui.Label;
    public exml_item4: eui.Group;
    public exml_zhangHuYuE: eui.Label;
    public exml_shenQingTiXian: eui.Group;
    public exml_tiXianJiLu: eui.Group;
    public exml_tiChengJiLu: eui.Group;
    public exml_item5: eui.Group;
    public exml_paoLiangJiLu: eui.Group;
    public exml_paoliangText1: eui.Label;
    public exml_paoliangText2: eui.Label;
    public exml_paoliangText3: eui.Label;


    public controller;

    constructor() {
        super();
        this.skinName = "UserPageSkin";
    }

    show() {
        super.show();

        this.exml_woYaoJiaoFei.addEventListener(egret.TouchEvent.TOUCH_TAP, this.woYaoJiaoFeiTouchHandler, this);
        this.exml_jiaoFeiJiLu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiaoFeiJiLuTouchHandler, this);
        this.exml_yaoQingHaoYou.addEventListener(egret.TouchEvent.TOUCH_TAP, this.yaoQingHaoYouTouchHandler, this);
        this.exml_shenQingTiXian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shenQingTiXianTouchHandler, this);
        this.exml_tiXianJiLu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tiXianJiLuTouchHandler, this);
        this.exml_tiChengJiLu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tiChengJiLuTouchHandler, this);
        this.exml_paoLiangJiLu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.paoLiangJiLuTouchHandler, this);
        this.exml_checkPending.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkPendingTouchHandler, this);
        this.exml_enabled.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enabledTouchHandler, this);
        this.exml_disabled.addEventListener(egret.TouchEvent.TOUCH_TAP, this.disabledTouchHandler, this);

        this.init();
    }

    init() {
        this.controller = new UserPageController();
        let controller = (this.controller as UserPageController);
        controller.displayView = this;
    }

    senMsg() {

    }

    /**我要交费 */
    private woYaoJiaoFeiTouchHandler(e: egret.TouchEvent) {
        console.log("我要交费");
    }

    /**交费记录 */
    private jiaoFeiJiLuTouchHandler(e: egret.TouchEvent) {
        console.log("交费记录");
    }

    /**邀请好友 */
    private yaoQingHaoYouTouchHandler(e: egret.TouchEvent) {
        console.log("邀请好友");
    }

    /**待审核 */
    private checkPendingTouchHandler(e: egret.TouchEvent) {
        console.log("待审核");
    }

    /**已开通 */
    private enabledTouchHandler(e: egret.TouchEvent) {
        console.log("已开通");
    }

    /**已禁用 */
    private disabledTouchHandler(e: egret.TouchEvent) {
        console.log("已禁用");
    }

    /**申请提现 */
    private shenQingTiXianTouchHandler(e: egret.TouchEvent) {
        console.log("申请提现");
    }

    /**提现记录 */
    private tiXianJiLuTouchHandler(e: egret.TouchEvent) {
        console.log("提现记录");
    }

    /**提成记录 */
    private tiChengJiLuTouchHandler(e: egret.TouchEvent) {
        console.log("提成记录");
    }

    /**跑量记录 */
    private paoLiangJiLuTouchHandler(e: egret.TouchEvent) {
        console.log("跑量记录");
    }
}