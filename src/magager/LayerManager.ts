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
        this.showPage(PagesIndex.STUDENT_ENABLED);

        return this.sceneLayer;
    }


    showPage(index) {
        this.sceneLayer.removeChildren();
        switch (index) {
            case PagesIndex.HOME:

                break;
            case PagesIndex.USER:
                let userPage = new UserPage();
                userPage.show();
                break;
            case PagesIndex.STUDENT_ENABLED:
                let studentEnabledPage = new StudentEnabledPage();
                studentEnabledPage.show();
                break;
        }
    }

}