class MyInfo {
btn_myInfo= "//span[text()='My Info']";

text_firstName="input[placeholder='First Name']";
text_middleName="input[placeholder='Middle Name']";
text_lastName="input[placeholder='Last Name']";
text_nickName=":nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
text_empId=":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
text_otherId=":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
text_drivingLisNo=":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
text_ssnNo=":nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
text_sinNo=":nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
radioButton_gender="[type='radio']";
checkbox_Smoker="[type='checkbox']";   //Two matching
btn_Save="div[class='orangehrm-custom-fields'] button[type='submit']";
text_suceesMessagePopUp=".oxd-text--toast-message";


    clickOnMyInfoTab()
    {
        cy.xpath(this.btn_myInfo).click();
    }

    verifyMyInfoTabOpenedOrNot(expectedTextInUrl)
    {
      cy.url().should('include',expectedTextInUrl)
    }

    fillMyInfo()
    {
      cy.get(this.text_firstName).clear().type('Akshay');
      cy.get(this.text_middleName).clear().type('Bhagwan');
      cy.get(this.text_lastName).clear().type('Pawar');
      cy.get(this.text_nickName).clear().type('Akki');
      cy.get(this.text_empId).clear().type('1001');
      cy.get(this.text_otherId).clear().type('500');
      cy.get(this.text_drivingLisNo).clear().type('WDAINGMC12121');
      cy.get(this.text_ssnNo).clear().type('AKSH');
      cy.get(this.text_sinNo).clear().type('SSIN');
      cy.get(this.radioButton_gender).first().should('be.checked');
      cy.get(this.checkbox_Smoker).first().should('not.be.checked').check({force:true});
      cy.get(this.btn_Save).click();

    }

    verifyInformationEditedOrNot()
    {
        if(cy.get(this.text_suceesMessagePopUp).should('be.visible').and('have.text','Successfully Saved'))
        {
            cy.log('Able to update all the profileInformtion...!!')
        }
        else{
            cy.log('Not able to update the profile information...!!!')
        }
       
        
    }
}

export default MyInfo;