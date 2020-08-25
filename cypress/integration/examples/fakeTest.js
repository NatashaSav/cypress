/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{

    it('My FirstTest case',function() {

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()

       cy.route(
           {
               method:'PUT',
               url:'comments/*',
               status:404,
               response:{
                   error:"Hey Comment do not exist"
               },
               delay:1000
           }).as('UpdateComment')

      cy.get('.network-put').click()
      cy.get('.network-put-comment').should('contain',"Hey Comment do not exist")


    })
})



