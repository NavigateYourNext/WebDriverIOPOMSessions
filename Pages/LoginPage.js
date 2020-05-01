const elementUtil = require('../util/elementUtil');

class LoginPage
{
    get username()
    {
        return $('#username');
    }

    get password()
    {
        return $('#password');
    }

    get loginBtn()
    {
        return $('#loginBtn');
    }

    get signUpLink()
    {
        return $('=Sign up');
    }

    getPageTitle()
    {
        return elementUtil.doGetPageTitle;
    }

    isSignUpLinkExist()
    {
        return elementUtil.doIsDisplayed(this.signUpLink());
    }

    doLogin(email,password)
    {
        elementUtil.doSetValue(this.username,email);
        elementUtil.doSetValue(this.password,password);
        elementUtil.doClick(this.loginBtn);
    }
}

module.exports = new LoginPage();