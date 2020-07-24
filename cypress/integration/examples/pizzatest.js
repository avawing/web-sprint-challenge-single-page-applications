describe('Pizza Test', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
        })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can enter a name', ()=>{
        cy
        .get(`input[name='name']`)
        .type('Ava')
        .should('have.value', 'Ava')
    })
    it('can enter an email', ()=>{
        cy
        .get(`input[name='email']`)
        .type('ava@ava.com')
        .should('have.value', 'ava@ava.com')
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can select a slice', ()=>{
        cy
        .get('select')
        .select('Small')
        .should('have.value', 'Small')
        .select('Medium')
        .should('have.value', 'Medium')
        .select('Large')
        .should('have.value', 'Large')
        .select('Why Would You Do This?')
        .should('have.value', 'Why Would You Do This?')
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
   it('can select toppings', () => {
        cy
        .get('#pepperoni')
        .check()
        cy
        .get('#olives')
        .check()
        cy
        .get('#mushrooms')
        .check()
        cy
        .get('#sausage')
        .check()
    })
    it('can check that button is disabled', ()=>{
        cy.get('#submitBtn').should('be.disabled')
    })
       it('can enter instructions', ()=>{
        cy
        .get(`input[name='instructions']`)
        .type('None')
        .should('have.value', '')
    })
    it('can check that button is not disabled', ()=>{
        cy.get('#submitBtn').should('not.be.disabled')
    })
    it('can submit form', () => {
        cy.get('#submitBtn').click()
         })
   })