/// <reference types="Cypress" />
describe('My Second Test Suite', () => {
    it('my second test case', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //parent child chaining
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($el, index, $list)=> {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                const btn = $el.find('button');
                cy.wrap(btn).click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()

    })
})
