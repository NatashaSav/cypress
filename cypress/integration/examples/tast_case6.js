/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{

    it('My FirstTest case',function() {
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       //show() method shows the hidden, selected elements.
       // Note: show() works on elements hidden with jQuery methods and display.

        //cy.get('div.mouse-hover-content').invoke('show') - first variant
        //{force:true}) - заставляет браузер принудительно нажать на елемент
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

    })
})

