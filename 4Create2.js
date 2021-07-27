/// <reference types="cypress" />

var username='+38162262711'
var password='kamilica123'

describe('Login', () =>
{
       
    it('Log in', () =>
    {
        
        cy.visit('https://passport.yandex.com/')
        cy.get('.Textinput-Control').type(username+'{enter}')
        cy.get('#passp-field-passwd').type(password+'{enter}')
        cy.get('.dheader-user__wrapper').click()
        cy.get('.menu__text').eq(0).click({force: true})        
        cy.get('[class="mail-LabelList-Item_content"]').eq(1).click()
        cy.wait(2000)
        cy.get('.mail-Layout-ContentWrapper').then(($element) => 
        {
                
            if ($element.text().includes('You have no unread messages')) 
                {
                cy.log('There are no unread emails')
                } 
                else 
                {
                cy.log('Number of unread emails is greater than 0')
                }
              
        })
        
        cy.get('.PSHeader-User').click()
        cy.get('[aria-label="Log out"]').click()
            
    })    
        
})         
                 