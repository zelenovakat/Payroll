describe("Main feature test", () => {
  it("goes to second slide", () => {
    cy.visit("/")

    cy.contains("Start").click()
    const secondSlideTitle = cy.contains("Profession")
    expect(secondSlideTitle).to.exist
  })

  it("completes whole form", () => {
    cy.visit("/")
    cy.contains("Start").click()

    expect(cy.contains("Profession")).to.exist
    cy.get("select").select("Programmer")
    cy.contains("Next").click()

    expect(cy.contains("Experience")).to.exist
    cy.get("select").select("4")
    cy.contains("Next").click()

    expect(cy.contains("Income year")).to.exist
    cy.get("[type='radio']").first().check()
    cy.contains("Next").click()

    expect(cy.contains("City")).to.exist
    cy.get("[type='radio']").first().check()
    cy.contains("Calculate").click()

    expect(cy.contains("Your result")).to.exist
  })
})
