import LoginPage from "../../pages/LoginPage";

describe('Login Page Automation', () => {

    let loginData;
before('Hooks for reading test data', ()=>
{
  cy.fixture('CorrectLoginData').then((data)=>
  {
    cy.log('Reading data from fixtue file...!!!')
    loginData = data;
  })
})

    beforeEach('Visting application', () => {
       cy.visitingApplication();
    })
    const loginPage = new LoginPage();
    it('Login with correct credentials', () => {

        loginPage.setUsername(loginData.usrname);
        loginPage.setPassword(loginData.password);
        loginPage.clickOnLoginButton();
        loginPage.verifyLoginWithCorrectCredentails('/dashboard/index');
    })
    it('Login with Incorrect credentials', () => {

        loginPage.setUsername('Admin');
        loginPage.setPassword('admin123456');
        loginPage.clickOnLoginButton();
        loginPage.verifyLoginWithIncorrectCredentails('Invalid credentials');
    })
})