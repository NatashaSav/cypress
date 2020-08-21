// <reference types="Cypress" />

describe('My Second Test Suite', function()
{

    it('My FirstTest case',function() {

        cy.visit("http://qaclickacademy.com/practice.php")
        //cy.visit(Cypress.env('url')+"/practice.php")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
      //window:alert - Cypress will auto accept alerts(press ok)
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
      //window:confirm - Cypress will auto accept confirmations
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
         //удаляет атрибут target_blank, который отчечает за то чтобы при клике на кнопку ссылка
        // с ее содержимым открылась на другой(соседней) странице
         cy.get('#opentab').invoke('removeAttr','target').click()
        // ссылка к которой возврощаються должна содержать qaclickacademy в названии урла
        // cy.url().should('include','qaclickacademy')
        cy.url().should('include','rahulshettyacademy')


         cy.go('back')

    }  )



}  )
