class UserHomePage extends UserPage {

    init() {
        this.controller = new UserHomePageController();
        let controller = (this.controller as UserHomePageController);
        controller.userHomePage = this;
    }
}