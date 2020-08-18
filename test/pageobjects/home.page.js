const Page = require('./page');


class HomePage extends Page{

    get buttonSignIn () { return $('a.login') }

    open () {
        return super.open();
    }

    clickSignInButton(){
        this.buttonSignIn.click()
    }

}

module.exports = new HomePage();