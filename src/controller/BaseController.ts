abstract class BaseController {
    constructor() {
    }

    /**数据模型 */
    protected dataModel;
    /**初始化 */
    abstract init();
    /**请求数据 */
    abstract requestData();
    /**刷新视图预处理 */
    abstract beforUpdateView();

    /**
     * 刷新视图
     * @param _displayView 要刷新的显示视图
     */
    protected updateView(_displayView) {
        for (let i in this.dataModel) {
            if (_displayView[i] instanceof eui.Label) {
                (_displayView[i] as eui.Label).text = this.dataModel[i];
            }
            else if (_displayView[i] instanceof eui.Image) {
                (_displayView[i] as eui.Image).source = this.dataModel[i];
            }
            else if (_displayView[i] instanceof eui.Button) {
                (_displayView[i] as eui.Button).label = this.dataModel[i];
            }
        }
    }
}