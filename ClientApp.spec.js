const {test, expect} = require('@playwright/test');



test('Browser Context-Validating Error', async ({page})=>
{
    
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator("#userEmail").fill("anshika@qmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    console.log(await page.locator('.login-wrapper-footer-text').textContent());
    await expect(page.locator('.login-wrapper-footer-text')).toContainText('Register here');
    await page.locator('.btn1').click();
    await page.locator("#firstName").fill("Ventsislav");
    await page.locator("#lastName").fill("Yankov");
    await page.locator("#userEmail").fill("ven_ci_hill@yahoo.com");
    await page.locator("#userMobile").fill("1888981663");
    await page.locator('.custom-select').selectOption('3: Engineer');
    await page.locator('div.row:nth-child(3) > div:nth-child(2) > label:nth-child(2) > input:nth-child(1)').check();
    expect(await page.locator('div.row:nth-child(3) > div:nth-child(2) > label:nth-child(2) > input:nth-child(1)').isChecked()).toBeTruthy();
    await page.locator("#userPassword").fill("Test01Test01#");
    await page.locator("#confirmPassword").fill("Test01Test01#");
    await page.locator('.col-md-1 > input:nth-child(1)').check();
    expect(await page.locator('.col-md-1 > input:nth-child(1)').isChecked()).toBeTruthy();
    await page.locator('#login').click();
    await page.locator('.btn btn-login').click();

    

    await page.pause();
   
   
});


