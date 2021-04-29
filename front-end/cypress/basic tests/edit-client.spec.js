/// <reference types="cypress" />

//const { should } = require("chai")

describe('First example', () => {

    it('login', () =>{
        cy.visit('http://localhost:3000/')
        cy.get('h2').should("contain", "Login")

        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")

        cy.get('.btn').click();

        cy.get('.username').should("contain", "Welcome tester01")

        cy.get('.blocks > :nth-child(2) > .btn').click();

        cy.get('.clients > :nth-child(3)').should("contain", "Musse Pigg")

        cy.get(':nth-child(3) > .action').click();

        cy.get('.menu > :nth-child(1)').click();

        cy.get(':nth-child(4) > input').clear();

        cy.get(':nth-child(4) > input').type("mimmi@pigg.com")

        cy.get('.blue').click();

        cy.get(':nth-child(3) > :nth-child(2) > .email').should("contain", "mimmi@pigg.com")

    })
})