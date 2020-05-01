class ElementUtil
{
    doClick(element)
    {
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element,value)
    {
        element.waitForDisplayed();
        element.setValue(value);
    }

    doGetText(element)
    {
        element.waitForDisplayed();
        return element.getText();
    }

    doGetPageTitle()
    {
        return browser.getTitle();
    }

    doIsDisplayed(element)
    {
        element.waitForDisplayed();
        return element.isDisplayed();
    }
}

module.exports = new ElementUtil();