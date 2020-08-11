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

    protected updateView(_disPlay) {
        for (let i in this.dataModel) {
            if (_disPlay[i] instanceof eui.Label) {
                (_disPlay[i] as eui.Label).text = this.dataModel[i];
            }
            else if (_disPlay[i] instanceof eui.Image) {
                (_disPlay[i] as eui.Image).source = this.dataModel[i];
            }
            else if (_disPlay[i] instanceof eui.Button) {
                (_disPlay[i] as eui.Button).label = this.dataModel[i];
            }
        }
    }
}