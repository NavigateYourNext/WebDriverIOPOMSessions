const elementUtil = require('../util/elementUtil');

class HomePage
{
    get header()
    {
        return $('h1.private-page__title');
    }

    get accountName()
    {
        return $('span.account-name ');
    }

    getPageTitle()
    {
        return elementUtil.doGetPageTitle;
    }

    getLoggedInAccountName()
    {
        return elementUtil.doGetText(this.accountName);
    }
}

module.exports = new HomePage();