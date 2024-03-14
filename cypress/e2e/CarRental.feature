Feature: Rent a Car

Scenario: Success Rent a Car
    Given user go to traveloka website
    When user select car product
     And user select tab Without Driver
     And select "Jakarta" as the Pick-up Location
     And select Pick-up Date & Time
     And Select Drop-off Date & Time
     And user click button search car
     And user select car provider
     And user select Pick-up Location in Rental Office
     And user Select Drop-off Location in Other Location
     And click button Continue
     And user fill contact details
     And fill driver details
     And user click continue
     And check all rental requirements
     And click "Continue to Payment"
     And user select payment method
    Then payment is proceed 
