import { test, expect } from "@playwright/test";

test("Should load homepage with correct title", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test(
  "Should do something",
  { tag: ["@smoke"], annotation: { type: "feature" } },
  async ({ page, request }, testInfo) => {
    // steps...
    /**
     * test(title, body)
     * test (title, details, body)
     *
     * title => string
     * body => callback fn {fixture eg: page}, [testInfo]
     */
  },
);

test.only("Should demo locators", async ({ page }) => {
  // 1. Launch URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // 2. Click on Make Appointment
  // await page.getByRole("link", { name: "Make Appointment" }).click();
  const makeAppointmentBtn = page.getByRole("link", {
    name: "Make Appointment",
  });
  console.log(
    `>> the type of locator: ${typeof makeAppointmentBtn}, The value of the locator is ${JSON.stringify(makeAppointmentBtn)}`,
  );
  await makeAppointmentBtn.click();
  await expect(page.getByText("Please login to make")).toBeVisible();
});
