
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
        this.showPage(PagesIndex.USER);

        return this.sceneLayer;
    }

    showPage(index, data = null) {
        this.sceneLayer.removeChildren();
        let page = null;
        switch (index) {
            case PagesIndex.HOME:
                page = new HomePage();
                page.show();
                break;
            case PagesIndex.USER:
                page = new UserPage();
                page.show();
                break;
            case PagesIndex.STUDENT_ENABLED:
                page = new StudentEnabledPage();
                StudentEnabledPageController.type = data;
                page.show();
                break;
            case PagesIndex.ORDERFROM:
                page = new OrderFromPage();
                page.orderFromPageController.type = data;
                page.show();
                break;
            case PagesIndex.USERPAY:
                page = new UserPayPage();
                page.show();
                break;
            case PagesIndex.PAYING:
                page = new PayingPage();
                page.show();
                break;
        }

        if (page.exml_bg) {
            (page.exml_bg as eui.Rect).height = Global.STAGE_HEIGHT;
        }
    }
}