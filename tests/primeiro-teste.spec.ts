import { beforeEach } from "node:test";
import test, { expect } from "playwright/test";

test('visitando página do playwright', async ({page})=>{

    await page.goto('http://playwright.dev');
    await page.getByRole('link', { name: 'Get started' }).click();


});

test.beforeEach(async ({page}) =>{
    await page.goto('https://www.saucedemo.com/v1/');

})

test.afterEach(async ({}) =>{
    console.log ('teste finalizado');
})

test('Assert básico', async({page})=>{
    //await page.goto('https://www.saucedemo.com/v1/');
    const loginButton = await page.locator('input#login-button');  // definir um locator
    await expect(loginButton).toHaveCSS('background-color','rgb(226, 35, 26)'); //verificar se o botão login é de cor vermelha
    await expect(loginButton).toBeVisible(); // botão deve estár visivel
    //await expect(loginButton).not.toBeVisible(); // botão não deve estár visivel
    //await expect(loginButton).not.toBeHidden(); // o inverso de "not tobeVisible", tobeVisible

})

test('Acções Básicas', async ({ page }) => {
    //dropdown
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('select#dropdown');
    await dropdown.selectOption('1');
    await expect(dropdown).toHaveValue('1');
    //await dropdown.selectOption({label: 'option 2'});
    //await expect(dropdown).toHaveValue('2');   
    
})
