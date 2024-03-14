class CarRentalPage{
    static selectCar(){
        cy.get('div.css-1dbjc4n > div:nth-child(0) >.r-14lw9ot > .r-18u37iz > div:nth-child(2) > div:nth-child(2) > .css-18t94o4').click();
    }

}

export default CarRentalPage;