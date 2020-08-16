class UserPayPageController extends BaseController {
    constructor() {
        super();
    }

    init() {
        let displayView = (this.displayView as UserPayPage);
        displayView.exml_titleBar.exml_set.visible = false;
        displayView.exml_inputText.text = "在此输入交费金额";

        this.requestData();
    }

    requestData() {

    }

    beforUpdateView() {

    }
}