function userLogout(){
    model.app.loggedInUser = null;
    loginPageView();
}
