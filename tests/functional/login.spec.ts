import { test, expect } from "@playwright/test";

test("Should login successfully", async ({ page }) => {
  // 1. Launch URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // 2. Click on Make Appointment
  await page.getByRole("link", { name: "Make Appointment" }).click();
  await expect(page.getByText("Please login to make")).toBeVisible();

  // 3. Login
  await page.getByLabel("Username").fill("John Doe");
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();

  // 4. Assert a text
  await expect(page.locator("h2")).toContainText("Make Appointment");
  await page.close();
});

test("Should prevent login with incorrect credentials", async ({ page }) => {
  // 1. Launch URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // 2. Click on Make Appointment
  await page.getByRole("link", { name: "Make Appointment" }).click();
  await expect(page.getByText("Please login to make")).toBeVisible();

  // 3. Login
  await page.getByLabel("Username").fill("John Smith");
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();

  // 4. Assert a text
  await expect(page.locator("#login")).toContainText(
    "Login failed! Please ensure the username and password are valid.",
  );
  await page.close();
});
