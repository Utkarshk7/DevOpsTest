require("./pages/home");
require("./pages/product");

describe("fioripractitioners", function () {

  it("Should validate the home screen", function () {
    // add actions and assertions here
    Then.onTheHomePage.iShouldSeeAllCategories();
    //expect(true).toBeTruthy();
  });

  // it("should see the Home page", function () {
  //   // call the page object's actions and assertions:
  //   // When.onTheHomePage.iDoSomething();
  //   // Then.onTheHomePage.iAssertSomething();
  // });

  it("Should search for a product", function () {

    //Add interaction
    When.onTheHomePage.iSearchForProduct();

    //Add behavior
    Then.onTheHomePage.theProductListShouldBeFiltered();
  });

  it("Should navigate to the product", function () {
    
    When.onTheHomePage.iSelectTheFirstProduct();
    Then.onTheProductPage.theProductTitleIsShown();
    Then.onTheProductPage.theProductCouldBeOrdered();
  });

});
