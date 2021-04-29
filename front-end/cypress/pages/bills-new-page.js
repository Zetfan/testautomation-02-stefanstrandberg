/// <reference types="cypress" />

const VALUE_FIELD = 'input'
const PAID_CHECKBOX = '.checkbox'
const SAVE_BTN = '.blue'

function createBill(value, confirmationContent) {
    cy.get(VALUE_FIELD).type(value)
    cy.get(PAID_CHECKBOX).click()
    cy.get(SAVE_BTN).click()
    cy.contains("Bills")
}

module.exports = {
    createBill
}