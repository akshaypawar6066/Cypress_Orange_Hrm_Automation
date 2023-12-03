class AdminPage {
    btn_adminTab = "//span[text()='Admin']";
    btn_jobs = "//span[normalize-space()='Job']";
    btn_jobsTitle = "//a[normalize-space()='Job Titles']";
    text_listOfJobs = ".oxd-table-body>div";




    clickOnAdminTab() {
        cy.xpath(this.btn_adminTab).click();
    }

    verifyUserNAvigatedToAdminTabOrNot(expectedTextInUrl) {
        cy.url().should('include', expectedTextInUrl);
    }

    navigateToJobTitlesPage() {
        cy.xpath(this.btn_jobs).click();
        cy.xpath(this.btn_jobsTitle).click();
    }

    verifyUserNavigatedToJobTitleList(expectedTextInUrl) {
        cy.url().should('include', expectedTextInUrl);
    }

    verifyNoOfAvilableJobs(expectedJobs) {
        let countOfJobs;
        cy.get(this.text_listOfJobs).its('length').then((length) => {
            countOfJobs=length;
            cy.log('No of Avilable Jobs count are:'+countOfJobs);
            cy.wrap(length).should('eq', expectedJobs);
            expect(length).to.equal(expectedJobs);
        })
    }




}

export default AdminPage;