import youtubePage from "../../pages/youtubePage"

describe('e2e youtube', () => {
    beforeEach(() => {
        cy.visit(Cypress.expose('YOUTUBE_URL'))
        cy.wait(3000)
        cy.log("strating test")
    })


    it('e2e youtube', () => {
        youtubePage.gamingMenu()
        youtubePage.getTrendingPage()
        youtubePage.getTrendingVideo()

    })
})