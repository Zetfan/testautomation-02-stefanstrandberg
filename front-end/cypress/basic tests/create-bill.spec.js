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

        cy.get(':nth-child(3) > .btn').click();

        cy.get('h2 > div').should("contain", "Bills")

        cy.get('h2 > .btn').click();

        cy.get('input').type("2500")

        cy.get('.blue').click();

        cy.get('#app').should("contain", "2500")

    })
})
