class LoginPage {

    loginToApplication(username, password)
    {
        cy.get("[name='username']").type(username);
        cy.xpath("//input[@name='password']").type(password);
        cy.get("[type='submit']").click();

    }

    verifyLoginWithCorrectCredentails(expectedUrlEndPoint)
    {
       if(cy.url().should('include', expectedUrlEndPoint))
       {
        cy.log('able to login the application...!!!')
       }
       else{
        cy.log('Not able to login the application...!!!')
       }
       
    }

    verifyLoginWithIncorrectCredentails(expectedText)
    {
        if(cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible'))
        {
            cy.log('Not able to login the application--->Test case pass')
        }
        else{
            cy.log('Test case failed...!!!!')
        }
        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', expectedText);
    }

}

export default LoginPage;