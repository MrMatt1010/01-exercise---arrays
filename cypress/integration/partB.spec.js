describe("Part B - Bank transactions", () => {
  it("should have at least 5 transactions", () => {
    cy.visit("http://localhost:5000/bank-transactions");
    cy.get("#transactions").children().its("length").should("at.least", 6);
  });

  it("transactions should total 300", () => {
    cy.visit("http://localhost:5000/bank-transactions");
    cy.get(".transactions-item.total").contains("Total: 300");
  });
});
