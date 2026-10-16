import agodaPage from '../../pages/agodaPage';
import { agodaLocator } from '../../locator/agodaLocator';


describe('e2e agoda', () => {

    beforeEach(() => {
        cy.fixture('agodaData').as('data');
        cy.visit(Cypress.expose('AGODA_URL'));
        cy.log("starting test")

    });

    it('e2e AGODA', () => {
        cy.get('@data').then((data) => {
            agodaPage.clickFlightTab();
            agodaPage.selectOriginDropdown().type(data.origin)
            agodaPage.selectOriginAllJakarta()
            agodaPage.selectDestinationDropdown().type(data.destination);
            agodaPage.selectDestinationOption('Changi Airport')

            agodaPage.selectDepartureDate();
            agodaPage.selectPassengerDropdown();
            agodaPage.clickSearchButton();


            agodaPage.selectEarliestFlight();
            agodaPage.selectAirline().wait(2000);
            agodaPage.selectFlight();


            agodaPage.fillContactForm(
                data.contact.firstName,
                data.contact.lastName,
                data.contact.email,
                data.contact.phone
            )

              agodaPage.verifyContactForm(
                data.contact.firstName,
                data.contact.lastName,
                data.contact.email,
                data.contact.phone
            )


            agodaPage.fillPassengerForm(
                data.passenger.firstName,
                data.passenger.lastName,
                data.passenger.nationality,
                data.passenger.day,
                data.passenger.year,
                data.passenger.month
            );



            agodaPage.verifyDepartArriveTime();
        });
    });
}
)   