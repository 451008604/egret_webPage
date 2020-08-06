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
    removeUi(panel: BaseScene): void {
        this.sceneLayer.removeChild(panel);
    }

    init(): egret.DisplayObjectContainer {
        return this.sceneLayer;
    }

}