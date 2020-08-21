/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage";
import ProductPage from "./pageObjects/ProductPage";

describe('My Second Test Suite', function () {
    before(function () {
        //run once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My FirstTest case', function () {
    const homePage=new HomePage()
    const productPage=new ProductPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneaur().should('be.disabled')

        homePage.getShopTab().click()



        this.data.productName.forEach(function (element){
            cy.selectProduct(element)
        })
        productPage.checkOutButton().click()
    })
})
