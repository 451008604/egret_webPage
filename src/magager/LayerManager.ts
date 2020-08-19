
class LayerManager {

    private sceneLayer: egret.DisplayObjectContainer;
    private static _instance: LayerManager;
    static get instance(): LayerManager {
        if (!this._instance) {
            this._instance = new LayerManager();
        }
        return this._instance;
    }

    private constructor() {
        this.sceneLayer = new egret.DisplayObjectContainer();
    }

    /**添加界面 */
    addUI(panel: BaseScene): void {
        this.sceneLayer.addChild(panel);
    }

    /**移除界面 */
    removeUI(panel: BaseScene): void {
        this.sceneLayer.removeChild(panel);
    }

    init(): egret.DisplayObjectContainer {
        this.showPage(PagesIndex.HOME);
        new UserPageData({
            exml_bianHao: "10002",
            exml_touXiang: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
            exml_yongHuMingCheng: "小明",
            exml_wenXinTiShi: "1、本平台永久免费开号、预先跑量。\n2、系统定期自动禁用疑似逃费账号。\n3、客服QQ：*********",
            exml_kaiHaoMingE: "99999",
            exml_daiShenHe: 123,
            exml_yiKaiTong: 456,
            exml_yiJinYong: 789,
            exml_zhangHuYuE: "88.88",
            exml_paoliangText1: 234,
            exml_paoliangText2: 234,
            exml_paoliangText3: 234
        });

        return this.sceneLayer;
    }

    showPage(index) {
        this.sceneLayer.removeChildren();
        switch (index) {
            case PagesIndex.HOME:
                new HomePage().show();
                break;
            case PagesIndex.USER:
                new UserPage().show();
                break;
            case PagesIndex.USERHOME:
                new UserHomePage().show();
                break;
            case PagesIndex.STUDENT_ENABLED:
                new StudentEnabledPage().show();
                break;
            case PagesIndex.ORDERFROM:
                new OrderFromPage().show();
                break;
            case PagesIndex.USERPAY:
                new UserPayPage().show();
                break;
            case PagesIndex.PAYING:
                new PayingPage().show();
                break;
        }
    }

}