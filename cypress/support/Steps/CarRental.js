import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../Pages/HomePage'
import CarRentalPage from '../Pages/CarRentalPage'
import CarProviderPage from '../Pages/CarProviderPage'
import CarRentalDetailPage from '../Pages/CarRentalDetailPage'
import { when } from 'cypress/types/jquery'
import PaymentPage from '../Pages/PaymentPage'

Given('user go to traveloka website', () =>{
    cy.visit('https://www.traveloka.com/en-id')
})

When('user select car product', () => {
    HomePage.selectCarProduct();
})

When('user select tab Without Driver', () => {
    HomePage.selectWithoutDriver();
})

When('select {string} as the Pick-up Location', (location) => {
    HomePage.selectLocation(location)
})

When('select Pick-up Date & Time', () => {
    HomePage.selectPickUpDate();
    HomePage.selectPickUpTime();
})

When('Select Drop-off Date & Time', () => {
    HomePage.selectDropOffDate();
    HomePage.selectDropOffTime();
})

When('user click button search car', () => {
    HomePage.searchCarRental();
})

When('user select car', () => {
    CarRentalPage.selectCar();
})

When('user select car provider', () => {
    CarProviderPage.selectCarProvider();
})

When('user select Pick-up Location in Rental Office', () => {
    CarRentalDetailPage.selectPickUpLoc()
})

When('user Select Drop-off Location in Other Location', () => {
    CarRentalDetailPage.selectDropOffLoc();
})

When('click button Continue', () => {
    CarRentalDetailPage.continueBooking();
})

when('user fill contact details', () => {
    CarRentalDetailPage.fillContactDetails();
})

When('fill driver details', () => {
    CarRentalDetailPage.fillDriverDetails();
})

When('user click continue', () => {
    CarRentalDetailPage.continueBooking();
})

When('check all rental requirements', () => {
    CarRentalDetailPage.checkAllRentalReq();
})

When('click {string}', (btn) => {
 CarRentalDetailPage.continueToPayment(btn);
})

When('user select payment method', () => {
    PaymentPage.selectPaymentMethod();
})

Then('payment is proceed', () => {
    PaymentPage.paymentProcess();
})