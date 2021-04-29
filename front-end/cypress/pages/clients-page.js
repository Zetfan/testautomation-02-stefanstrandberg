/// <reference types="cypress" />

const CREATE_CLIENT_BTN = "h2 > .btn"
const CLIENT_LIST = ".client"

const THREE_DOTS_BTN = ".action > img"
const EDIT_BTN = ".menu > :nth-child(1)"
const NAME_FIELD = ":nth-child(3) > input"
const MAIL_FIELD = ":nth-child(4) > input"
const PHONE_FIELD = ":nth-child(5) > input"
const SAVE_BTN = ".blue"

const DELETE_BTN = ".menu > :nth-child(2)"

function viewClientNew(confirmationContent){
    cy.get(CREATE_CLIENT_BTN).click()
    cy.contains(confirmationContent)
}

function verifyLastClient(name, mail, phone) {
    cy.get(CLIENT_LIST).last()
    .should("contain", name)
    .and("contain", mail)
    .and("contain", phone)
}

function editLastClient(name, mail, phone, confirmationContent) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.get(NAME_FIELD).clear(name)
    cy.get(NAME_FIELD).type(name)

    cy.get(MAIL_FIELD).clear(mail)
    cy.get(MAIL_FIELD).type(mail)

    cy.get(PHONE_FIELD).clear(phone)
    cy.get(PHONE_FIELD).type(phone)
    cy.get(SAVE_BTN).click()
    cy.contains("Clients")

}

function deleteLastClient() {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
}

module.exports = {
    viewClientNew,
    verifyLastClient,
    editLastClient,
    deleteLastClient
}