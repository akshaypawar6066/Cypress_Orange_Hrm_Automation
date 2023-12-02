import PIMEmploye from "../../pages/PIMEmployePage";
import LoginPage from "../../pages/LoginPage";

describe('PIMEmploye Page Test Cases', () => {

    const pim = new PIMEmploye();
    const loginPage = new LoginPage();
    it('Add New Employe and Verify Employe Added or Not', () => {
        cy.visitApplication();
        loginPage.loginToApplication(Cypress.env('username'), Cypress.env('password'));
        loginPage.verifyLoginWithCorrectCredentails('/dashboard/index')

        pim.clickOnAddEmployTab();
        pim.verifyAddEmployeTabOpenedOrNot();
        pim.fillEmployeDetailsAndSave('Akshay', "Bhagwan", "Pawar");
        pim.verifyEmployeAddedOrNot('Akshay Bhagwan');
    })
})