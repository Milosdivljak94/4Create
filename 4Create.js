/// <reference types="cypress" />


describe('Google', () =>
{
          
        it('Google search', () =>
        {
            
            cy.visit('https://www.google.com/')
            cy.get('[role="combobox"]').type('4Create{enter}')
            cy.get('.g').eq(0).should('contain','http://4createsoft.com')
            cy.log('4Create company is displayed first with Serbian language google search')

            cy.visit('https://www.google.com/')
            cy.get('.EzVRq').eq(0).click()
            cy.get('.EzVRq').eq(1).click()
            cy.get('#langSecLink').click()
            cy.get('[data-value="en"]').click()
            cy.get('[role="button"]').eq(4).click()
            cy.get('[role="combobox"]').type('4Create{enter}')
            cy.get('.g').eq(0).should('contain','http://4createsoft.com')
            cy.get('.g').eq(0).should('contain','http://4createsoft.com')
            cy.log('4Create company is displayed first with English language google search')

        }) 
    })        