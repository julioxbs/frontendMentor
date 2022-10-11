const tipValues = ["5", "10", "15", "25", "50"];

describe("Calculator", () => {
  beforeEach("Visit page", () => {
    cy.visit("http://localhost:5173/")
  });

  it("Create a new tip", () => {
    cy.get('[data-test="resetBtn"]').should("be.disabled");
    cy.get("[data-test=bill]").should("exist").type("142.55");
    cy.get('[data-test="15"]').should("exist").click();
    cy.get('[data-test="people"]').should("exist").type("5");
    cy.get('[data-test="0"]').should("exist").contains("$4.28");
    cy.get('[data-test="1"]').should("exist").contains("$32.79");
    cy.get('[data-test="resetBtn"]').should("not.be.disabled");
  });

  it("Create a custom tip", () => {
    cy.get('[data-test="resetBtn"]').should("be.disabled");
    cy.get("[data-test=bill]").should("exist").type("365.40");
    cy.get('[data-test="custom"]').should("exist").type("13.5");
    cy.get('[data-test="people"]').should("exist").type("2");
    cy.get('[data-test="0"]').should("exist").contains("$24.66");
    cy.get('[data-test="1"]').should("exist").contains("$207.36");
    cy.get('[data-test="resetBtn"]').should("not.be.disabled");
  });

  it("Create a new tip and reset the values", () => {
    cy.get('[data-test="resetBtn"]').should("be.disabled");
    cy.get("[data-test=bill]").should("exist").type("142.55");
    cy.get('[data-test="15"]').should("exist").click();
    cy.get('[data-test="people"]').should("exist").type("5");
    cy.get('[data-test="0"]').should("exist").contains("$4.28");
    cy.get('[data-test="1"]').should("exist").contains("$32.79");
    cy.get('[data-test="resetBtn"]').should("not.be.disabled").click();

    context("Verify if all values are reseted", () => {
      cy.get('[data-test="resetBtn"]').should("be.disabled");
      cy.get('[data-test="0"]').should("not.have.value");
      cy.get('[data-test="1"]').should("not.have.value");
      cy.get("[type=number]").should("not.have.value");
      tipValues.forEach(tip => {
        cy.get(`[data-test=${tip}]`).should("have.class", "noActive");
      });
    })
  });

  it("Not allow the user create a new tip with 0 or negative people", () => {
    cy.get('[data-test="resetBtn"]').should("be.disabled");
    cy.get("[data-test=bill]").should("exist").type("142.55");
    cy.get('[data-test="15"]').should("exist").click();
    cy.get('[data-test="people"]').should("exist").type("0");
    cy.get('[data-test="errorMessage"]').should("have.class", "block");
    cy.get('[data-test="0"]').should("not.have.value");
    cy.get('[data-test="1"]').should("not.have.value");
    cy.get('[data-test="resetBtn"]').should("be.disabled")
  })
})