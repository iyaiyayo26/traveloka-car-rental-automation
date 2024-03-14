class CarRentalDetailPage{
    static selectPickUpLoc(){
        cy.get('div#RENTAL_DROPOFF_LOCATION').scrollIntoView();
        cy.get('div#RENTAL_PICKUP_LOCATION > .r-14lw9ot > .r-eqz5dr > :nth-child(3)  > :nth-child(1) > :nth-child(2) > .r-1awozwy > .r-1awozwy > div:nth-child(1)').click();
        cy.get('.r-184en5c > div.r-14lw9ot > div.r-1loqt21 > .r-18u37iz > .r-mgfd1o').eq(0).click();
        cy.get('.r-1udh08x > .r-14lw9ot > .r-1vjbqqu').click();
    }

    static selectDropOffLoc(){
        cy.get('div#RENTAL_DROPOFF_LOCATION > .r-14lw9ot > .r-eqz5dr > :nth-child(3) > .r-18u37iz > [aria-labelledby="0.d0465edf7fc98"] > .r-1awozwy > .r-1awozwy > .r-1awozwy').click();
        cy.get('.r-184en5c > div.r-14lw9ot > div.r-1loqt21 > .r-18u37iz > .r-mgfd1o').eq(1).click();
        cy.get('.r-1udh08x > .r-14lw9ot > [aria-label="Same as Pick-up Location"]').click();

    }

    static continueBooking(){
        cy.get('.r-173mn98 > [aria-live="polite"]').scrollIntoView().click();
    }

    static fillContactDetails(){
        cy.get('[aria-labelledby="name.full"]').eq(0).click().type('Fahiya');
        cy.get('[aria-label="Phone Number"]').eq(0).click().type('08123456789');
        cy.get('[aria-labelledby="emailAddress"]').click().type('email@email.com');
    }

    static fillDriverDetails(){
        cy.get('.r-1k97etb > .r-1awozwy > .css-901oao').scrollIntoView();
        cy.get('select').select('Mrs.').should('have.value','MRS');
        cy.get('[aria-labelledby="name.full"]').eq(1).click().type('Fahiya');
        cy.get('[aria-label="Phone Number"]').eq(1).click().type('08123456789');
    }

    static continueBooking(){
        cy.get('.r-1k97etb > .r-1awozwy > .css-901oao').click();
    }

    static checkAllRentalReq(){
        cy.get('.r-tzxfm6 > .r-1wzrnnt > .r-1loqt21 > .r14lw9ot > .r-13awgt0').click();
        cy.get('.css-1dbjc4n > :nth-child(1) > .r-1loqt21 > .r-1awozwy > [tabindex="0"]').click();
        cy.contains('r-1awozwy > .r-jwli3a', 'Save').click();
    }

    static continueToPayment(btn){
        cy.contains('.r-1awozwy > . css-901oao', 'Continue to Payment').click();
    }
}

export default CarRentalDetailPage;