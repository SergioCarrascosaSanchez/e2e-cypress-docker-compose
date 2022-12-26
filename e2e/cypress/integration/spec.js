it("Main page can be opened", () => {
    cy.visit("/")
    cy.contains("Vite + React")
  }
)