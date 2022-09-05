const {test, expect} = require('@playwright/test')


test.only("Popup validations",async({page})=>
{
    await page.goto('https://google.com/');
    //await page.goto('https://www.gong.bg/');
    //await page.goBack();
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
});    






   