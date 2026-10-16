import amazonPage from '../../pages/amazonPage';

describe('e2e amazon', () => {

    beforeEach(() => {
        cy.fixture('amazonData').as('data')
        cy.visit(Cypress.expose('AMAZON_URL'));
        cy.viewport(1920, 1080)
        cy.log("starting test")
    })

    it('e2e amazon', ( ) => {
        cy.get('@data').then((data) => {
        amazonPage.searchItem(data.item)
        amazonPage.sortItem()
        amazonPage.selectChair()

        })
   
    })
})