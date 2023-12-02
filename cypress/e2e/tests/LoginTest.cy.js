import LoginPage from "../../pages/LoginPage";

describe('Login Page Automation', () => {

  let loginData;
  
  before('Hooks for reading test data', () => {
    cy.fixture('CorrectLoginData').then((data) => {
      cy.log('Reading data from fixtue file...!!!')
      loginData = data;
    })
  })

  beforeEach('Visting application', () => {
    cy.visitApplication();
  })
  const loginPage = new LoginPage();
  it('Login with correct credentials', () => {

    loginPage.loginToApplication(loginData.username, loginData.password);
    loginPage.verifyLoginWithCorrectCredentails('/dashboard/index');
  })
  it('Login with Incorrect credentials', () => {

    loginPage.loginToApplication('Admin', '6564ddasv')
    loginPage.verifyLoginWithIncorrectCredentails('Invalid credentials');
  })
})