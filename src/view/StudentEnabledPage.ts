class StudentEnabledPage extends BaseScene {
    public exml_bg: eui.Rect;
    public exml_scroller: eui.Scroller;
    public exml_scrollerList: eui.List;

    private studentEnabledPageController: StudentEnabledPageController = new StudentEnabledPageController();
    constructor() {
        super();
        this.skinName = "StudentEnabledPageSkin";
    }

    show() {
        super.show();

        this.studentEnabledPageController.studentEnabledPage = this;
    }

    senMsg() {

    }
}