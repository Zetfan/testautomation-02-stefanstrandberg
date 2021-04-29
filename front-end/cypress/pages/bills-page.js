/// <reference types="cypress" />

const CREATE_BILL_BTN = 'h2 > .btn'
const BILLS_LIST = '.bills'
const THREE_DOTS_BTN = '.action > img'
const EDIT_BTN = '.menu > :nth-child(1)'
const DELETE_BTN = '.menu > :nth-child(2)'
const VALUE_FIELD = ':nth-child(3) > input'
const SAVE_BTN = '.blue'

function viewBillNew(confirmationContent) {
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(confirmationContent)
}

function verifyLastBill(value) {
    cy.get(BILLS_LIST).last()
    .should("contain", value)
}

function editLastBill(value, confirmationContent) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.get(VALUE_FIELD).clear(value)
    cy.get(VALUE_FIELD).type(value)
    cy.get(SAVE_BTN).click()
    cy.contains("Bills")

}

function deleteLastBill() {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
}

module.exports = {
    viewBillNew,
    verifyLastBill,
    editLastBill,
    deleteLastBill
}