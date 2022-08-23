const { expect } = require('@playwright/test');
exports.SimpleFormDemoHelper = class SimpleFormDemoHelper {

    constructor(page) {
        this.page = page;
    };

    isSeleniumEasyPageOpenedSuccessfully() {
        const img_logo = page.locator('//img[@alt="Selenium Easy"]');
        await img_logo.isVisible();
    };

}