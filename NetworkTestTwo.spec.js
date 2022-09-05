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
   const products = page.locator("button[routerlink*='myorders']").click();
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=62fe3acfc4d0c51f4f0eebd1")
   route=>route.continue({url:'https://rahulshettyacademy.com/api/ecom/user/get-cart-count/62f6066be26b7e1a10f64b6b'})
   
   await page.locator("text=Vew").first().click();
   await page.pause();
     

    

    await page.pause();
   

});