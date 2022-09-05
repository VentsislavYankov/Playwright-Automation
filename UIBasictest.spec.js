const {test, expect} = require('@playwright/test');



test('Browser Context Playwright test', async ({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/login");
    console.log(await page.title());
    await page.locator('#userName').type("Koko Bimbov");
    await page.locator('#password').type("12345678");
    await page.locator('#login').click();
    console.log(await page.locator('#name').textContent());
    await expect(page.locator('#name')).toContainText('Invalid');
    await page.locator('#newUser').click();
    await page.locator('#firstname').type("Test Ventsi");
    await page.locator('#lastname').type("Test Yankov");
    await page.locator('#userName').type("Venshizel");
    await page.locator('#password').type("12345678");
    //await page.locator('#recaptcha-anchor').click();
    await page.locator('#gotologin').click();
   
   
});

test('UI Controls', async ({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form");

    await page.locator('#firstName').type("Milli");
    await page.locator('#lastName').type("Vanilli");
    await page.locator('#userEmail').type("milivanili@mail.bg");
    //await page.locator('#gender-radio-3').check();
    //expect(await page.locator('#gender-radio-3').isChecked()).toBeTruthy();
    //await expect( page.locator('#gender-radio-3')).toBeChecked();
    //const dropdown = page.locator('#state');
    //await dropdown.selectOption(".css-1uccc91-singleValue");
    //await page.pause();

});

