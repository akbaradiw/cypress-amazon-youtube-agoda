const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const day = tomorrow.getDate();
const ordinal = day % 10 === 1 && day !== 11
    ? 'st'
    : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
            ? 'rd'
            : 'th';
const departureDateLabel = `${tomorrow.toLocaleDateString('en-US', { weekday: 'long' })}, ${tomorrow.toLocaleDateString('en-US', { month: 'long' })} ${day}${ordinal}, ${tomorrow.getFullYear()}`;

export const agodaLocator = {
    flightTab: '#travel-search-navigation-tab-2 > .sc-aXZVg',
    originDropdown: '#flight-origin-text-search > .Box-sc-kv6pi1-0',
    originAllJakarta: '.gZRiQX',
    destinationDropdown: '#flight-destination-text-search > .Box-sc-kv6pi1-0',
    departureDate: '#flight-departure',
    departureDateSelect: `[data-testid="${departureDateLabel}"]`,
    passengerDropdown: '.SearchBoxTextDescription__child',
    passengerSelect: '[data-element-object-id="first"]',
    searchButton: '[data-element-name="flight-search"]',
    allAirlines: '[data-testid="show-all-flight-filter-item-airline"]',
    FilterAirlines: '[data-component="flight-filter-item-airline"]',
    sortButton: '[data-testid="flights-quick-sort-item-other-button"]',
    fastestFlightOption: '[data-testid="flights-quick-sort-item-Duration-button"]',
    flightDetail: '[data-testid="web-refresh-flights-card"]',
    selectFlightButton: '[data-component="flight-card-bookButton"]',
    contactFirstName: '[data-testid="contact.contactFirstName"]',
    contactLastName: '[data-testid="contact.contactLastName"]',
    contactEmail: '[id="contact.contactEmail"]',
    contactPhoneNumber: '[data-testid="contact.contactPhoneNumber-PhoneNumberDataTestId"]',
    maleRadioButton: 'input[type="radio"][aria-label="Male"]',
    nationalityDropdown: 'button[aria-labelledby="cca5f5dcf222a8"]',
    nationalitySearchInput: '.FormFieldstyled__SkeletonInputContainerStyled-sc-11x6xcu-3 > .afcde-items-stretch > .sc-aXZVg > .afcde-box',
    selectNationality: '.afcde-overflow-y-auto',
    passengerFirstName: '[data-testid="flight.forms.i0.units.i0.passengerFirstName"]',
    passengerLastName: '[data-testid="flight.forms.i0.units.i0.passengerLastName"]',
    dayDate:'[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId"]',
    yearDate:'[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId"]',
    monthDate: '[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]',
    monthDateList: '[data-testid="floater-container"]',
    flightOriginDest: '[data-testid="flight-slice-item-origin-dest"]',
    january: ':nth-child(1) > label > .ae68d-bg-generic-base-transparent > .ae68d-pr-12 > .Inputstyled__InputContainerStyled-sc-1yd74ix-0 > .ae68d-w-full > .Inputstyled__OverlayStyled-sc-1yd74ix-2'
}   

