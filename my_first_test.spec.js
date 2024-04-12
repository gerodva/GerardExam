const {test, expect, selectors} = require('@playwright/test');
const { waitForDebugger } = require('inspector');
//const { chrome } = require('playwright');

///////////TEST NUMBER 1///////////////////////////
test.beforeEach(async ({ page }) => {
    await page.goto('https://surveyrc.taxcreditco.com/automation-challenge');
});

 test.describe('Fill data', () => {

///////////TEST NUMBER 2///////////////////////////
    test('llenado', async ({page}) => {
        await page.getByLabel('First Name', {exact: true }).fill('Gerardo');
        await page.getByLabel('Last Name', {exact: true }).fill('Vazquez');
        await page.getByLabel('Email Address', {exact: true }).fill('hola@mundo.com');
        await page.getByLabel('Street Address', {exact: true }).fill('Americas av');
        await page.getByLabel('City', {exact: true }).fill('Guadalajara');
        await page.getByLabel('Zip Code', {exact: true }).fill('44000');


///////////TEST NUMBER 3///////////////////////////

        await page.getByRole('button', { name: 'Next' }).click();
       // await page.waitForTimeout(4000);

        await page.locator('//*[@id="SurveyControl_Question11396"]/div/label[2]').click();
        await page.locator('//*[@id="SurveyControl_Question11397"]/div/label[2]').click();
        await page.locator('//*[@id="SurveyControl_Question914"]/div/label[2]').click();
        await page.locator('//*[@id="SurveyControl_Question11361"]/div/label[2]').click();
        await page.locator('//*[@id="SurveyControl_Question1244"]/div/label[2]').click();



        await page.getByRole('button', { name: 'Next' }).click();
        //await page.waitForTimeout(4000);

///////////TEST NUMBER 4///////////////////////////
        const textoEnPagina = await page.textContent('body');
        const textoBuscado = 'Gerardo Vazquez';  
        if (textoEnPagina.includes(textoBuscado)) {
            console.log('Text is present.');
         } else {
             console.log('Text not seen.');
            }

        await page.getByRole('button', { name: 'Submit form' }).click();
        await page.waitForTimeout(4000);


///////////TEST NUMBER 5///////////////////////////

        const urlActual = page.url();
        console.log('URL actual:', urlActual);

        
        if (urlActual === 'https://surveyrc.taxcreditco.com/automation-challenge') {

            console.log('Failed.');
        } else {
            console.log('Success.');
    }

    })

})

