import { test, expect } from "@playwright/test";

test.describe("Make Appointment", () => {

  test.beforeEach("Login", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test.afterEach("Logout", async ({ page }) => {
    await page.close();
  });

  test("test", async ({ page }) => {
    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");
    await page.getByText("Apply for hospital readmission").click();
    await page.getByRole("radio", { name: "Medicaid" }).check();
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    await page.getByRole("cell", { name: "10" }).click();
    await page.getByRole("textbox", { name: "Comment" }).fill("Super");
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await expect(
      page.getByRole("heading", { name: "Appointment Confirmation" }),
    ).toBeVisible();
    await expect(page.locator("#summary")).toContainText(
      "Please be informed that your appointment has been booked as following:",
    );
    await page.getByRole("link", { name: "Go to Homepage" }).click();
  });
  
});
