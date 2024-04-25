describe("Part A - Recipe", () => {
  it("should have the first step from the recipe method", () => {
    cy.visit("http://localhost:5000/recipe");
    cy.get("#recipe-method li:nth-of-type(1)").contains("use a sharp knife", {
      matchCase: false,
    });
  });

  it("should have the second step from the recipe method", () => {
    cy.visit("http://localhost:5000/recipe");
    cy.get("#recipe-method li:nth-of-type(2)").contains("gently push banana", {
      matchCase: false,
    });
  });

  it("should have the third step from the recipe method", () => {
    cy.visit("http://localhost:5000/recipe");
    cy.get(
      "#recipe-method li:nth-of-type(3)"
    ).contains("stuff pieces of marshmallow", { matchCase: false });
  });

  it("should have the fourth step from the recipe method", () => {
    cy.visit("http://localhost:5000/recipe");
    cy.get("#recipe-method li:nth-of-type(4)").contains("place each banana", {
      matchCase: false,
    });
  });

  it("should have the fifth step from the recipe method", () => {
    cy.visit("http://localhost:5000/recipe");
    cy.get("#recipe-method li:nth-of-type(5)").contains("unwrap the bananas", {
      matchCase: false,
    });
  });
});
