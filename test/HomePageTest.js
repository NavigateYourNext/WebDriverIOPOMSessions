const loginPageTest = require('../Pages/LoginPage');
const loginData = require('../config');
const homePageTest = require('../Pages/HomePage');

describe("Home Page Feature Test",function()
{
    it("Verify Home Page Title",function()
    {
        browser.url("/");
        browser.maximizeWindow();

        loginPageTest.doLogin(loginData.username,loginData.password);

        console.log("Home Page Title Is: "+homePageTest.getPageTitle);

    });
});

