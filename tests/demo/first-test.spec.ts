import { test, expect } from "@playwright/test";

test("Should load homepage with correct title", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test(
  'Should do something', 
  {tag: ['@smoke'],
   annotation: 
    {type:'feature'}
  },
  async({page, request}, testInfo) => {
  // steps...
  /**
   * test(title, body)
   * test (title, details, body)
   * 
   * title => string
   * body => callback fn {fixture eg: page}, [testInfo]
   */
});