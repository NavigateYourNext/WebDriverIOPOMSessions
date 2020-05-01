const loginPageTest = require('../Pages/LoginPage');
const loginData = require('../config');

describe("Login Page Feature Test",function(){

    this.retries(2); //it will run failed test cases maximum times, here it will run 2 times
    it("Verify Login Page Title",function(){

        browser.url("/");

        browser.maximizeWindow;

        const title = loginPageTest.getPageTitle;

       console.log("Title of the page is: "+title);

        browser.pause(2000);

    });

    it("Verify Sign Up Link Exist",function(){

        const result = loginPageTest.isSignUpLinkExist;

        console.log("Sign Up Link Exist Status Is: "+result);
    });

    it("Verify Login",function(){

        loginPageTest.doLogin(loginData.username,loginData.password);

        browser.pause(2000);

    });



});