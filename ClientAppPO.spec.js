//const {test, expect} = require('@playwright/test');
const{customtest} = require('../utils/test-base');
const {POManager} = require('./pageobjects/POManager');
//Json->String->js object
const dataset = JSON.parse(require("../utils/placeorderTestData.json"));

for(const data of dataset)
{

 test('Client App login for ${data.productName}', async ({page})=>

};

 customtest('Client App login', async({page})=>
 {
    const poManger = new POManager(page);
   
    const products = page.locator(".card-body");
    const loginPage = poManger.getLoginPage();
    loginPage.goTo();
    loginPage.validLogin(data.username, data.password);
    const dashboardPage = poManger.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();
   
   
   
});
