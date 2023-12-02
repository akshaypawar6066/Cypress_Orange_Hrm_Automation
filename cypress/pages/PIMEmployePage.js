class PIMEmploye
 {
     static employeId=Math.floor(Math.random()*1000);

    btn_PIM="//span[text()='PIM']"
    btn_letfArraow=".oxd-icon.bi-chevron-left";
    btn_addEmployee="//a[text()='Add Employee']";

    text_employeFName="input[placeholder='First Name']";
    text_employeMName="input[placeholder='Middle Name']";
    text_employeLName="input[placeholder='Last Name']";
    text_employeId="[class='oxd-grid-item oxd-grid-item--gutters']>.oxd-input-group.oxd-input-field-bottom-space input";
    btn_save="button[type='submit']";
    text_saveSuccessfulPopUp="//p[text()='Successfully Saved']";

    text_serchedEmployeName=".oxd-table-card>div>div:nth-child(3)";

    clickOnAddEmployTab()
    {
        cy.xpath(this.btn_PIM).click();
        cy.get(this.btn_letfArraow).click();
        cy.xpath(this.btn_addEmployee).click();
    }

    verifyAddEmployeTabOpenedOrNot()
    {
        cy.url().should('include','/addEmployee');
    }

     fillEmployeDetailsAndSave(Fname, Mname, Lname)
    {
      cy.get(this.text_employeFName).type(Fname);
      cy.get(this.text_employeMName).type(Mname);
      cy.get(this.text_employeLName).type(Lname);
      cy.get(this.text_employeId).clear().type(PIMEmploye.employeId,{delay:200});
      cy.get(this.btn_save).click();
    }

   static searchEmployeUsingEmployeId()
    {
        cy.xpath("//a[normalize-space()='Employee List']",{timeout:5000}).should('exist').click({force:true});
        cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type(PIMEmploye.employeId,{delay:300});
        cy.get("button[type='submit']").click();
    }

    verifyEmployeAddedOrNot(expectedName)
    {
     cy.xpath(this.text_saveSuccessfulPopUp).should('be.visible').and('have.text','Successfully Saved');
     PIMEmploye.searchEmployeUsingEmployeId();
     cy.get(this.text_serchedEmployeName).should('have.text', expectedName);
    }

}

export default PIMEmploye;