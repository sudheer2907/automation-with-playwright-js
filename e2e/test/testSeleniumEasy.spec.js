import { test, expect } from '@playwright/test';
const { BaseHelper } = require('../helper/BaseHelper');
const { SimpleFormDemoHelper } = require('../helper/SimpleFormDemoHelper');

test('Verify SeleniumEasy dummy website is loaded properly.', async ({ page }) => {
    const baseHelper = new BaseHelper(page);
    const simpleFormDemoHelper = new SimpleFormDemoHelper(page)
    baseHelper.openApplication();
    simpleFormDemoHelper.isSeleniumEasyPageOpenedSuccessfully();
});

test('Verify Simple Form Demo under Input Forms is working fine', async ({ page }) => {

});
