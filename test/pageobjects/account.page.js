const Page = require('./page');


class AccountPage extends Page{

    get userInfo () { return $('.account>span') }


    getUserInfo(){
        return this.userInfo.getText()
    }

}

module.exports = new AccountPage();