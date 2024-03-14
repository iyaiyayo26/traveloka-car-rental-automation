class PaymentPage{
    static selectPaymentMethod(){
        cy.get('[data-testid="paymentOption-TRANSFER"] > .r-1awozwy > .r-1awozwy > .r-jwli3a').click();
        cy.contains('div.r-1awozwy > div.r-jwli3a', 'Pay with Bank Transfer').click();
    }

    static paymentProcess(){
        cy.contains('div.r-1b7u577 > . r-1i6uqv8', 'Payment instructions have been sent to your email').should('be.visible')
    }
}

export default PaymentPage;