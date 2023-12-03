import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/LoginPage";
describe('Admn Page Automation', () => {
    const loginPage = new LoginPage();
    const adminPage=new AdminPage();
    it('Validate No of available jobs on admin page', () => {
        cy.visitApplication();
        loginPage.loginToApplication(Cypress.env('username'), Cypress.env('password'));
        loginPage.verifyLoginWithCorrectCredentails('dashboard/index')

        adminPage.clickOnAdminTab();
        adminPage.verifyUserNAvigatedToAdminTabOrNot('/admin/viewSystemUsers');
        adminPage.navigateToJobTitlesPage();
        adminPage.verifyUserNavigatedToJobTitleList('/admin/viewJobTitleList');
        adminPage.verifyNoOfAvilableJobs(25);
    })
})