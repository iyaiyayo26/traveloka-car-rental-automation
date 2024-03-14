class HomePage{
    static selectCarProduct(){
        cy.contains('div', 'Car Rental').click();
    }

    static selectWithoutDriver(){
        cy.get('div.css-1dbjc4n.r-1loqt21.r-1otgn73.r-1i6wzkk.r-lrvibr').click({multiple: true, force: true});
    }

    static selectLocation(location){
        cy.get('[data-testid="rental-search-form-location-input"]').click({force: true});
        cy.get('[data-testid="rental-search-form-location-input"]').type(location);
        cy.get('[data-testid="rental-search-form-location-group"] > :nth-child(1)').click()
    }

    static selectPickUpDate(){
        // cy.get('[data-testid="rental-search-form-date-input-start"]').click();
        cy.get('div.r-1awozwy > [data-testid="rental-search-form-date-input-start"]').click();
        cy.get('[data-testid="mds-calendar"] > div.r-18u37iz > :nth-child(0) > div.css-1dbjc4n.r-18u37iz > :nth-child(0) > :nth-child(2) > :nth-child(19) > [data-testid="date-cell-16-3-2024"]').click();
    }

    static selectPickUpTime(){
        cy.get('[data-testid="rental-search-form-time-input-start"]').click();
        cy.get('div.css-1dbjc4n.r-y46g1k > :nth-child(0) > :nth-child(0) > :nth-child(1) > div > div.css-1dbjc4n > div:nth-child(9)').click();
        cy.get('div.css-1dbjc4n.r-y46g1k > :nth-child(1)').click();
    }

    static selectDropOffDate(){
        cy.get('[data-testid="rental-search-form-date-input-end"]').click();
        cy.get('div.css-1dbjc4n.r-eddy15 > div.css-1dbjc4n > [data-testid="mds-calendar"] > div.css-1dbjc4n.r-18u37iz > div:nth-child(0) > div.css-1dbjc4n.r-18u37iz > [data-year="2024"] > div:nth-child(2) > div:nth-child(22) > [data-testid="date-cell-19-3-2024"]').click();
    }

    static selectDropOffTime(){
        cy.get('[data-testid="rental-search-form-time-input-end"]').click();
        cy.get('div.css-1dbjc4n.r-y46g1k > :nth-child(0) > :nth-child(0) > :nth-child(1) > div > div.css-1dbjc4n > div:nth-child(11)').click();
        cy.get('div.css-1dbjc4n.r-y46g1k > :nth-child(1)').click();
    }

    static searchCarRental(){
        cy.get('[data-testid="rental-search-form-cta"]').click();
    }
}

export default HomePage;