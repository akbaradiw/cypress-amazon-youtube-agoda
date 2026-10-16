import { amazonLocator } from "../locator/amazonLocator";

class amazonPage {
    visitAmazon() {
        return cy.visit('https://www.amazon.com/')
    }

    searchInput(locator) {
        return cy.get(locator).click()
    }

    searchButton(locator) {
        return cy.get(locator)
    }

    sortDropdown(locator) {
        return cy.get(locator).should('be.visible')
    }

    highToLow(locator) {
        return cy.get(locator)
    }

    products(locator) {
        return cy.get(locator)
    }

    visit() {
        return this.visitAmazon();
    }

    searchItem(item) {
        this.searchInput(amazonLocator.searchInput).type(item);
        this.searchButton(amazonLocator.searchButton).click()
        cy.wait(3000)
    }



    sortItem() {
        this.sortDropdown(amazonLocator).click()
        cy.wait(3000)

        return this.highToLow(amazonLocator.highToLow).click()
    }

    //     sortByPriceLowToHigh() {
    //   this.sortDropdown(amazonLocator.sortDropdown)
    //     .select('price-asc-rank', { force: true })   // or the actual value attribute
    // }

    selectChair() {
        const getCandidate = (product) => {
            const $product = Cypress.$(product);

            return {
                product,
                name: $product.find('h2').first().text().trim(),
                href: $product.find('a[href*="/dp/"]').first().attr('href'),
                price: $product
                    .find('.a-price .a-price-whole')
                    .first()
                    .text()
                    .replace(/[^\d]/g, ''),
                sponsored: product.innerText.toLowerCase().includes('sponsored')
            };
        };

        return this.products(amazonLocator.products)
            .filter(':visible')
            .should(($products) => {
                const eligibleProducts = Array.from($products)
                    .map(getCandidate)
                    .filter(({ name, price, href, sponsored }) => name && price && href && !sponsored);

                expect(
                    eligibleProducts.length,
                    'visible non-sponsored products with a name and price'
                ).to.be.greaterThan(0);
            })
            .then(($products) => {
                const eligibleProducts = Array.from($products)
                    .map(getCandidate)
                    .filter(({ name, price, href, sponsored }) => name && price && href && !sponsored);

                const firstRowTop = Math.min(
                    ...eligibleProducts.map(({ product }) => product.getBoundingClientRect().top)
                );
                const firstRowProducts = eligibleProducts.filter(({ product }) => {
                    return Math.abs(product.getBoundingClientRect().top - firstRowTop) < 10;
                });

                expect(
                    firstRowProducts.length,
                    'non-sponsored products with a name and price in first eligible row'
                ).to.be.greaterThan(0);

                const selectedProduct = firstRowProducts.reduce((rightmost, current) => {
                    return current.product.getBoundingClientRect().right >
                        rightmost.product.getBoundingClientRect().right
                        ? current
                        : rightmost;
                });

                const selectedProductData = {
                    name: selectedProduct.name,
                    price: selectedProduct.price,
                    href: selectedProduct.href
                };

                return cy.wrap(selectedProductData)
                    .as('selectedProduct')
                    .then((selected) => {
                        expect(selected.href, 'selected product link')
                            .to.be.a('string')
                            .and.not.be.empty;

                        return cy.visit(new URL(selected.href, 'https://www.amazon.com').href);
                    });
            });
    }
}

export default new amazonPage();