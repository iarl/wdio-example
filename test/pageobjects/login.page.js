const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get buttonSignIn () { return $('#SubmitLogin') }
    get messageError() { return $('div.alert.alert-danger > ol > li') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        this.buttonSignIn.click(); 
    }

}

module.exports = new LoginPage();
