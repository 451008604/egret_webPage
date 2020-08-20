
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
        switch (index) {
            case PagesIndex.HOME:
                new HomePage().show();
                break;
            case PagesIndex.USER:
                new UserPage().show();
                break;
            case PagesIndex.STUDENT_ENABLED:
                let studentEnabledPage: StudentEnabledPage = new StudentEnabledPage();
                studentEnabledPage.show();
                studentEnabledPage.studentEnabledPageController.type = data;
                break;
            case PagesIndex.ORDERFROM:
                let orderFromPage: OrderFromPage = new OrderFromPage();
                orderFromPage.show();
                orderFromPage.orderFromPageController.type = data;
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