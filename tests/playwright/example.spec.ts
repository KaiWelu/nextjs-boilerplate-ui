import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/')
    // Find an element with the text 'here' and click on it
    await page.click('text=here')
    // The new URL should be "/playwright" (baseURL is used there)
    await expect(page).toHaveURL('http://localhost:3000/playwright')

    await expect(
        page.getByText('This is for the playwright test')
    ).toContainText('This is for the playwright test')
})
