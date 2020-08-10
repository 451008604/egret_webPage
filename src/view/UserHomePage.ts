class UserHomePage extends UserPage {

    show() {
        super.show();

        this.controller = new UserHomePageController();
        let controller = (this.controller as UserHomePageController);
        controller.userHomePage = this;
    }
}