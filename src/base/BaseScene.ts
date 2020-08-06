abstract class BaseScene extends eui.Component {
    constructor() {
        super();
    }
    /**
     * 子类不需要复写
     */
    createChildren(): void {
        super.createChildren();
    }

    /**打开 */
    show(): void {
        LayerManager.instance.addUI(this);
    }

    /**关闭 */
    hide(): void {
        LayerManager.instance.removeUI(this);
    }

    /**发送消息在这里面 */
    abstract senMsg(): void;

}