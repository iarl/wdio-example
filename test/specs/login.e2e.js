//import * as chai from "chai";
const chai = require('chai')
const expect = chai.expect;
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page')
const AccountPage = require('../pageobjects/account.page')

describe('Login to the shop', () => {
    it('should login with valid credentials', () => {
        HomePage.open()
        HomePage.clickSignInButton()
        LoginPage.login('automation@accordmail.net', 'password');
        expect(AccountPage.getUserInfo()).to.be.equal('Auto Test')
    });
});


