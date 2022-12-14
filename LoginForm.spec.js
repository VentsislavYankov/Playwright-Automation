const {test, expect} = require('@playwright/test');



test('Browser Context-Validating Error', async ({page})=>
{
    
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator("#userEmail").fill("ven_ci_hill@yahoo.com");
    await page.locator("#userPassword").fill("Test01Test01#");
    await page.locator("[value='Login']").click();
    console.log(await page.locator('.left > p:nth-child(2)').textContent());
    await expect(page.locator('.left > p:nth-child(2)')).toContainText('Practice');
    await page.locator('#sidebar > form:nth-child(3) > div:nth-child(3) > div:nth-child(3) > input:nth-child(1)').check();
    expect(await page.locator('#sidebar > form:nth-child(3) > div:nth-child(3) > div:nth-child(3) > input:nth-child(1)').isChecked()).toBeTruthy();
    await page.locator('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3)').click();
    await page.locator('.btn-primary').click();    
    await page.locator('.continue').click();
    await page.locator('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)').click();
   
    await page.locator('#sidebar > form:nth-child(3) > div:nth-child(5) > div:nth-child(3) > input:nth-child(1)').check();
    expect(await page.locator('#sidebar > form:nth-child(3) > div:nth-child(5) > div:nth-child(3) > input:nth-child(1)').isChecked()).toBeTruthy();
    await page.locator('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)').click();
    await page.locator('app-dashboard.ng-star-inserted > app-sidebar:nth-child(1) > nav:nth-child(1) > ul:nth-child(4) > li:nth-child(4) > button:nth-child(1)').click();

    console.log(await page.locator('.heading > h1:nth-child(1)').textContent());
    await expect(page.locator('.heading > h1:nth-child(1)')).toContainText('Cart');
    
    await page.locator('.odd > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').click();
    await page.locator("text=Checkout").click();

    //console.log(await page.locator('.item__title').textContent());
    //await expect(page.locator('.item__title')).toContainText('adidas original');

    //await page.locator('select.input:nth-child(2) > option:nth-child(5)').click();
    await page.locator('div.row:nth-child(2) > div:nth-child(2) > input:nth-child(2)').fill("123");
    await page.locator('div.row:nth-child(3) > div:nth-child(1) > input:nth-child(2)').fill("Koko Bimbov");
    await page.locator('div.row:nth-child(4) > div:nth-child(1) > input:nth-child(2)').fill("rahulshettyacademy");
    await page.locator('button.btn:nth-child(2)').click();

    console.log(await page.locator('p.mt-1').textContent());
    await expect(page.locator('p.mt-1')).toContainText('Applied');
    await page.locator("[placeholder*='Country']").type("Bulgaria");
    await page.locator("text=Bulgaria").click(); 
   
    await page.locator("//a[@class='btnn action__submit ng-star-inserted']").click();
    console.log(await page.locator('.hero-primary').textContent());
    await expect(page.locator('.hero-primary')).toContainText('order');

    await page.locator("//button[@class='btn btn-primary mt-3 mb-3']").click();
    await page.locator("//button[contains(text(),'ORDERS')]").click();
    await page.locator('tr.ng-star-inserted:nth-child(5) > td:nth-child(6) > button:nth-child(1)').click();

    console.log(await page.locator("//p[@class='tagline']").textContent());
    await expect(page.locator("//p[@class='tagline']")).toContainText('Thank you');

    const orderId = await page.locator("//div[@class='col-text -main']").textContent();
    console.log(orderId);
    await page.locator("//button[contains(text(),'Sign Out')]").click();


    await page.pause();
   
   
});




