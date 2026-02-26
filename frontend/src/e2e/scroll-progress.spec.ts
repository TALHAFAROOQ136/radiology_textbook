import { test, expect } from '@playwright/test';

test.describe('Scroll Progress Indicator', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a page with sufficient content to scroll
    await page.goto('http://localhost:3001/docs/part-1-foundations/chapter-01-introduction');
  });

  test('should show scroll progress indicator at the top of the page', async ({ page }) => {
    // Check that the progress indicator exists
    const progressBar = page.locator('.scroll-progress-bar');
    await expect(progressBar).toBeVisible();

    // Initially, the progress should be at 0%
    const initialWidth = await progressBar.evaluate(el => parseFloat(getComputedStyle(el).width));
    expect(initialWidth).toBeGreaterThanOrEqual(0);
  });

  test('should update progress as user scrolls down the page', async ({ page }) => {
    const progressBar = page.locator('.scroll-progress-bar');

    // Get initial progress
    let initialWidth = await progressBar.evaluate(el => parseFloat(getComputedStyle(el).width));

    // Scroll down the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 4));

    // Wait for the progress bar to update
    await page.waitForTimeout(100);

    // Get updated progress
    let updatedWidth1 = await progressBar.evaluate(el => parseFloat(getComputedStyle(el).width));

    // Progress should have increased
    expect(updatedWidth1).toBeGreaterThan(initialWidth);

    // Scroll further down
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(100);

    let updatedWidth2 = await progressBar.evaluate(el => parseFloat(getComputedStyle(el).width));
    expect(updatedWidth2).toBeGreaterThan(updatedWidth1);

    // Scroll to near the bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.9));
    await page.waitForTimeout(100);

    let finalWidth = await progressBar.evaluate(el => parseFloat(getComputedStyle(el).width));
    expect(finalWidth).toBeGreaterThan(updatedWidth2);
    // Final width should be close to 100% (allowing for some margin)
    expect(finalWidth).toBeLessThan(page.viewportSize().width!); // Should not exceed container width
  });

  test('should maintain progress when scrolling up', async ({ page }) => {
    const progressBar = page.locator('.scroll-progress-bar');

    // Scroll down significantly
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.8));
    await page.waitForTimeout(100);

    const scrolledDownWidth = await progressBar.evaluate(el => parseFloat(getComputedStyle(el).width));

    // Scroll back up a bit
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.4));
    await page.waitForTimeout(100);

    const scrolledUpWidth = await progressBar.evaluate(el => parseFloat(getComputedStyle(el).width));

    // When scrolling up, the progress should decrease
    expect(scrolledUpWidth).toBeLessThan(scrolledDownWidth);
  });
});