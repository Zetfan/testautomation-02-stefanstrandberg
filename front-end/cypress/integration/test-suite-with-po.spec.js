/// <reference types="cypress" />

import * as loginPage from '../pages/loginPage'
import * as dashboardPage from '../pages/dashboardPage'
import * as clientsPage from '../pages/clients-page'
import * as clientNewPage from '../pages/client-new-page'
import * as billsPage from '../pages/bills-page'
import * as billsNewPage from '../pages/bills-new-page'

var faker = require('faker');

let firstRandomName = faker.name.findName();
let secondRandomName = faker.name.findName();

let firstRandomMail = faker.internet.email();
let secondRandomMail = faker.internet.email();

let firstRandomPhone = faker.phone.phoneNumber();
let secondRandomPhone = faker.phone.phoneNumber();

let firstRandomValue = faker.datatype.number();
let secondRandomValue = faker.datatype.number();

describe('Test suite with Page-objects', () => {
    beforeEach("login", () =>{
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle('Login')
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Welcome')
    })

    it('Logout', () =>{
        dashboardPage.performLogout('Login')

    })

    it("Create client and verify, edit client and verify, delete client, logout", () =>{
        dashboardPage.viewClients("Clients")
        clientsPage.viewClientNew("New Client")
        clientNewPage.createClient(firstRandomName, firstRandomMail, firstRandomPhone, "Clients")
        clientsPage.verifyLastClient(firstRandomName, firstRandomMail, firstRandomPhone)
        clientsPage.editLastClient(secondRandomName, secondRandomMail, secondRandomPhone)
        clientsPage.verifyLastClient(secondRandomName, secondRandomMail, secondRandomPhone)
        clientsPage.deleteLastClient()
        dashboardPage.performLogout('Login')
    })

    it('Create bill and verify, edit bill. delete bill, logout', () =>{
        dashboardPage.viewBills("Bills")
        billsPage.viewBillNew("New Bill")
        billsNewPage.createBill(firstRandomValue)
        billsPage.verifyLastBill(firstRandomValue)
        billsPage.editLastBill(secondRandomValue)
        billsPage.deleteLastBill()
        dashboardPage.performLogout('Login')
    })



})