import { agodaLocator } from "../locator/agodaLocator";

function timeToMinutes(timeText) {
    const match = timeText.match(/\b(\d{1,2}):(\d{2})(?:\s*([AP]M))?\b/i);

    if (!match) {
        return null;
    }

    let hours = Number(match[1]);
    const minutes = Number(match[2]);
    const meridiem = match[3]?.toUpperCase();

    if (minutes > 59 || (meridiem ? hours < 1 || hours > 12 : hours > 23)) {
        return null;
    }

    if (meridiem) {
        hours = (hours % 12) + (meridiem === 'PM' ? 12 : 0);
    }

    return hours * 60 + minutes;
}

class agodaPage {
    visitAgoda() {
        return cy.visit('https://www.agoda.com/')
    }

    flightTab(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    originDropdown(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    originAllJakarta(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    destinationDropdown(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    departureDate(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    departureDateSelect(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    passengerDropdown(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    searchButton(locator) {
        return cy.get(locator).click();
    }

    allAirlines(locator) {
        return cy.get(locator).click();
    }

    FilterAirlines(locator) {
        return cy.get(locator)
    }

    sortButton(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    fastestFlightOption(locator) {
        return cy.get(locator).should('be.visible').click();
    }

    flightDetail(locator) {
        return cy.get(locator).first().should('be.visible').click();
    }



    selectFlightButton(locator) {
        return cy.get(locator).click();
    }

    contactFirstName(locator) {
        return cy.get(locator)
    }

    contactLastName(locator) {
        return cy.get(locator)
    }

    contactEmail(locator) {
        return cy.get(locator)
    }

    contactPhoneNumber(locator) {
        return cy.get(locator)
    }

    maleRadioButton(locator) {
        return cy.get(locator).click();
    }

    nationalityDropdown(locator) {
        return cy.get(locator).click();
    }

    nationalitySearchInput(locator) {
        return cy.get(locator).click();
    }

    selectNationality(locator) {
        return cy.get(locator).click();
    }

    passengerFirstName(locator) {
        return cy.get(locator).click();
    }

    passengerLastName(locator) {
        return cy.get(locator).click();
    }

    dayDate(locator) {
        return cy.get(locator).click();
    }

    yearDate(locator) {
        return cy.get(locator).click();
    }

    monthDate(locator) {
        return cy.get(locator)
    }

    monthDateList(locator) {
        return cy.get(locator);
    }

    flightOriginDest(locator) {
        return cy.get(locator);
    }

    january(locator) {
        return cy.get(locator);
    }



    clickFlightTab() {
        return this.flightTab(agodaLocator.flightTab);
    }
    selectOriginDropdown() {
        return this.originDropdown(agodaLocator.originDropdown);
    }

    selectOriginAllJakarta() {
        return this.originAllJakarta(agodaLocator.originAllJakarta);
    }

    selectDestinationDropdown() {
        return this.destinationDropdown(agodaLocator.destinationDropdown);
    }

    selectDestinationOption(destination) {
        return cy.contains(destination).should('be.visible').click();
    }

    selectDepartureDate() {
        this.departureDate(agodaLocator.departureDate);
        return this.departureDateSelect(agodaLocator.departureDateSelect);
    }

    selectPassengerDropdown() {
        return this.passengerDropdown(agodaLocator.passengerDropdown);
    }


    visit() {
        return this.visitAgoda();
    }

    clickSearchButton() {
        return this.searchButton(agodaLocator.searchButton);
    }


    selectAirline() {
        this.allAirlines(agodaLocator.allAirlines);
        return this.FilterAirlines(agodaLocator.FilterAirlines)
            .contains('Malaysia Airlines')
            .should('be.visible')
            .click()
    }

    // selectDepartureTimeSort() {
    //     return this.sortButton(agodaLocator.sortButton). contains('lowest price').should('be.visible').click();

    // }

    selectFastestFlightOption() {
        return this.fastestFlightOption(agodaLocator.fastestFlightOption);
    }


    selectFlight() {
        this.flightDetail(agodaLocator.flightDetail)
        this.selectFlightButton(agodaLocator.selectFlightButton)


    }

    // toPassengerDetail()
    // {
    // }

    selectEarliestFlight() {

        this.sortButton(agodaLocator.sortButton)
        return cy.get('.ae68d-list-none > :nth-child(4) > .ae68d-bg-generic-base-transparent').click()

    }

    fillContactForm(firstName, lastName, email, phoneNumber) {
        this.contactFirstName(agodaLocator.contactFirstName).click().type(firstName);
        this.contactLastName(agodaLocator.contactLastName).click().type(lastName);
        this.contactEmail(agodaLocator.contactEmail).click().type(email);
        return this.contactPhoneNumber(agodaLocator.contactPhoneNumber).click().type(phoneNumber);
    }

    verifyContactForm(firstName, lastName, email, phoneNumber) {
        this.contactFirstName(agodaLocator.contactFirstName).should('have.value', firstName)
        this.contactLastName(agodaLocator.contactLastName).should('have.value', lastName)
        this.contactEmail(agodaLocator.contactEmail).should('have.value', email);
        return this.contactPhoneNumber(agodaLocator.contactPhoneNumber).should('have.value', phoneNumber);


    }

    fillPassengerForm(firstName, lastName, nationality, day, year, month) {
        this.nationalityDropdown(agodaLocator.nationalityDropdown)
        this.nationalitySearchInput(agodaLocator.nationalitySearchInput).type(nationality)
        this.maleRadioButton(agodaLocator.maleRadioButton)
        this.selectNationality(agodaLocator.selectNationality)
        this.passengerFirstName(agodaLocator.passengerFirstName).type(firstName)
        this.passengerLastName(agodaLocator.passengerLastName).type(lastName)
        this.dayDate(agodaLocator.dayDate).type(day)
        this.yearDate(agodaLocator.yearDate).type(year)
        this.monthDate(agodaLocator.monthDate).contains(month).click()
        this.monthDateList(agodaLocator.monthDateList).contains(month).click()
        this.monthDate(agodaLocator.monthDate).click()
        return this.january(agodaLocator.january).click()

    }

    verifyDepartArriveTime() {
        return this.flightOriginDest(agodaLocator.flightOriginDest)
    }


}

export default new agodaPage();