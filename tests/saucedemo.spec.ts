import test, { expect } from "playwright/test";


test.beforeEach(async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');

})

/*test.afterEach(async ({}) =>{
    console.log ('teste finalizado');
}) */

test.only('Localizando por data-test', async ({page})=>{

//await page.goto('https://www.saucedemo.com/');
await page.getByTestId('username').fill('standard_user');
await page.getByTestId('password').fill('secret_sauce');
await page.getByTestId('login-button').click();

await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); //verificar se está na url desejada
const productLable = page.locator('data-test="title')
console.log("url verificada com sucesso");

await page.pause();


})
