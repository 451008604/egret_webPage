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

    showPage(index) {
        this.sceneLayer.removeChildren();
        switch (index) {
            case PagesIndex.HOME:

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
        }
    }

}