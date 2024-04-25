const horses = [
  "Savvy Nine",
  "Insayshable",
  "Flying Quest",
  "Righteous Doctrine",
  "Lakeshore Eagle",
  "Sunshine Warrior",
];

const [winner, second, third, ...rest] = horses;

describe("Part B - Horse Race Results", () => {
  it(`should have "${winner}" as the winner`, () => {
    cy.visit("http://localhost:5000/race-results");
    cy.get("#winner").contains(winner);
  });

  it(`should have "${second}" in second place`, () => {
    cy.visit("http://localhost:5000/race-results");
    cy.get("#second").contains(second);
  });

  it(`should have "${third}" in third place`, () => {
    cy.visit("http://localhost:5000/race-results");
    cy.get("#third").contains(third);
  });

  it(`should have list the rest of the horses`, () => {
    cy.visit("http://localhost:5000/race-results");
    cy.get("#rest").contains(rest.join(", "));
  });
});
