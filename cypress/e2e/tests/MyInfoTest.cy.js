import LoginPage from "../../pages/LoginPage";
import MyInfo from "../../pages/MyInfoPage";

describe('MyInfo Page Autmation', ()=>
{
    const loginPage=new LoginPage();
    const myInfo=new MyInfo();
    it('Edit Profile Information', ()=>
    {
        cy.visitApplication();
        loginPage.loginToApplication(Cypress.env('username'), Cypress.env('password'));
        loginPage.verifyLoginWithCorrectCredentails('/dashboard/index');
        myInfo.clickOnMyInfoTab();
        myInfo.verifyMyInfoTabOpenedOrNot('/viewPersonalDetails');
        myInfo.fillMyInfo();
        myInfo.verifyInformationEditedOrNot();
    })
})