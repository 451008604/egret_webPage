class Global {

    /**请求地址 */
    static URL: string = "https://www.hshaichuan.com/click/";

    /**接口类型 */
    static INTERFACE_TYPE = {
        /**组长页 */
        USER_PAGE: "wechatAction!insertUser.action",
        /**用户页 */
        USER_HOME_PAGE: "releaseAdressAction!getALLAmount.action",
        /**用户支付页 */
        USER_PAY_PAGE: "wechatAction!pay.action",
        /**学员 - 已开通页 */
        STUDENT_ENABLED_PAGE: "",
        /**全部交费页 */
        PAYING_PAGE: "historyHistoryAction!getAllhistory.action",
        /**订单页 */
        ORDER_FROM_PAGE: "releaseAdressAction!getAllHistoryAdress.action"
    }

    /**舞台高度 */
    static STAGE_HEIGHT: number = 0;
    /**舞台宽度 */
    static STAGE_WIDTH: number = 0;

    /**用户信息 */
    static USER_INFO: UserPageData = null;


    /**获取地址栏参数 */
    static get GET_URL_PARAM() {
        let url = window.location.search.split("&");
        url[0] = url[0].replace("?", "");
        let json = {};
        for (let i = 0; i < url.length; i++) {
            let temp = url[i].split("=");
            json[temp[0]] = temp[1];
        }
        return json;
    }
}
