import { youtubeLocator } from "../locator/youtubeLocator";


class youtubePage {
    guideButton(locator) {
        return cy.get(locator)
    }

    viewAllButton(locator) {
        return cy.get(locator).should('be.visible')
    }

    gamingButton(locator) {
        return cy.get(locator).should('be.visible')
    }

    selectVideo(locator) {
        return cy.get(locator)
    }



    gamingUrl(locator) {
        cy.visit('https://www.youtube.com/gaming').should('be.visible')
    }

    viewAllTrending(locator) {
        cy.contains(
            'ytd-item-section-renderer #header-button',
            'View all',
            { timeout: 15000 }
        )
            .should('be.visible')
            .click();
    }



    gamingMenu() {
        this.guideButton(youtubeLocator.guideButton).click()
        this.viewAllButton(youtubeLocator.viewAllButton, { timeout: 20000 }).scrollIntoView()
            .should("be.visible").click()
        this.gamingButton(youtubeLocator.gamingButton).scrollIntoView().click();
        cy.url({ timeout: 20000 }).should("include", "/gaming");
    }

    getTrendingPage() {
        this.viewAllTrending(youtubeLocator.viewAllTrending).first()
            .scrollIntoView()
            .should("be.visible")
            .click();
    }

    getTrendingVideo(){
        this.selectVideo(youtubeLocator.selectVideo).click()
    }
}

export default new youtubePage();