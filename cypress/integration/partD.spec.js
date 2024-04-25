describe("Part D - Shopping Cart", () => {
  it("should have 6 bottles of wine", () => {
    cy.visit("http://localhost:5000/shopping-cart");
    cy.get("#shoppingCart tr:nth-of-type(2) td:first-child").contains("wine", {
      matchCase: false,
    });
    cy.get("#shoppingCart tr:nth-of-type(2) td:nth-of-type(2)").contains("6");
  });

  it("should have 2 blocks of chocolate", () => {
    cy.visit("http://localhost:5000/shopping-cart");
    cy.get("#shoppingCart tr:nth-of-type(3) td:first-child").contains(
      "chocolate",
      {
        matchCase: false,
      }
    );
    cy.get("#shoppingCart tr:nth-of-type(3) td:nth-of-type(2)").contains("2");
  });

  it("should have 1 coffee", () => {
    cy.visit("http://localhost:5000/shopping-cart");
    cy.get("#shoppingCart tr:nth-of-type(4) td:first-child").contains(
      "coffee",
      {
        matchCase: false,
      }
    );
    cy.get("#shoppingCart tr:nth-of-type(4) td:nth-of-type(2)").contains("1");
  });

  it("should have 1 frozen pizza", () => {
    cy.visit("http://localhost:5000/shopping-cart");
    cy.get("#shoppingCart tr:nth-of-type(5) td:first-child").contains("pizza", {
      matchCase: false,
    });
    cy.get("#shoppingCart tr:nth-of-type(5) td:nth-of-type(2)").contains("1");
  });
});
