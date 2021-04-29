/// <reference types="cypress" />

//Elements
const HOMEPAGE_BTN = 'h1 > .router-link-active'
const LOGOUT_BTN = '.user > .btn'
const VIEW_BILLS_BTN = ':nth-child(3) > .btn'
const VIEW_CLIENTS_BTN = '.blocks > :nth-child(2) > .btn'


// Functions / Actions
function performLogout(confirmationContent){
    cy.get(HOMEPAGE_BTN).click()
    cy.wait(500)
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)

    //click the button
    //make an assertion
}

function viewClients(confirmationContent) {
    cy.get(VIEW_CLIENTS_BTN).click()
    cy.contains(confirmationContent)
}

function viewBills(confirmationContent) {
    cy.get(VIEW_BILLS_BTN).click()
    cy.contains(confirmationContent)
}


//Export the methods / functions / actions
module.exports = {
    performLogout,
    viewClients,
    viewBills
}
