class BaseScene extends eui.Component {
    constructor() {
        super();
    }

    createChildren(): void {
        super.createChildren();
    }

    /**打开 */
    show(): void {
        LayerManager.instance.addUI(this);
    }

    /**关闭 */
    hide(): void {
        LayerManager.instance.removeUi(this);
    }

}