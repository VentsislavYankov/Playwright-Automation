const {test, expect, request} = require('@playwright/test');
const {ApiUtils} = require('./utils/APIUtils');
let token;
let orderId;
let response;
test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayLoad);
    responce = await apiUtils.creatOrder(orderPayLoad);

   
})





//before all test 1,test 2, test 3

test('Place the order', async ({page})=>
{
       
    page.addInitScript(value => {

        window.localStorage.setItem('token',value);
    }, response.token);
    
   
   await page.goto("https://rahulshettyacademy.com/client/");
   const products = page.locator(".card-body");
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
    

    

    await page.pause();
   

});