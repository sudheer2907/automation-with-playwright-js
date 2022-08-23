const { expect } = require('@playwright/test');
exports.BaseHelper = class BaseHelper {

    constructor(page) {
        this.page = page;
    }

    getCurrentDateAndTime() {
        var currentdate = new Date();
        var datetime = currentdate.getFullYear()
            + "-" + currentdate.getMonth()
            + "-" + currentdate.getDate()
            + "-" + currentdate.getHours()
            + "-" + currentdate.getMinutes()
            + "-" + currentdate.getSeconds();
        return datetime.toString();
    };

    openApplication() {
        cy.visit('https://demo.seleniumeasy.com/');
        cy.xpath('//a[contains(text(),"No, thanks!")]').click();
    };
}