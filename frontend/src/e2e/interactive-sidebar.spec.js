const { test, expect } = require('@playwright/test');

test.describe('Interactive Sidebar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should expand and collapse sections', async ({ page }) => {
    // Find the Part 3: Chest Radiology section header
    const chestSectionHeader = page.locator('text="Part 3: Chest Radiology"');

    // Verify the section exists
    await expect(chestSectionHeader).toBeVisible();

    // Initially, the subsections should not be visible
    await expect(page.locator('text="Chapter 1: Chest Anatomy"')).not.toBeVisible();
    await expect(page.locator('text="Chapter 2: Chest Physiology"')).not.toBeVisible();
    await expect(page.locator('text="Chapter 15: Approach to Reading Chest X-Rays"')).not.toBeVisible();

    // Click to expand the section
    await chestSectionHeader.click();

    // Now the subsections should be visible
    await expect(page.locator('text="Chapter 1: Chest Anatomy"')).toBeVisible();
    await expect(page.locator('text="Chapter 2: Chest Physiology"')).toBeVisible();
    await expect(page.locator('text="Chapter 15: Approach to Reading Chest X-Rays"')).toBeVisible();

    // Click again to collapse
    await chestSectionHeader.click();

    // Subsections should be hidden again
    await expect(page.locator('text="Chapter 1: Chest Anatomy"')).not.toBeVisible();
    await expect(page.locator('text="Chapter 2: Chest Physiology"')).not.toBeVisible();
    await expect(page.locator('text="Chapter 15: Approach to Reading Chest X-Rays"')).not.toBeVisible();
  });

  test('should have working search functionality', async ({ page }) => {
    // Find the search input
    const searchInput = page.locator('.search-input');
    await expect(searchInput).toBeVisible();

    // Type in search term
    await searchInput.fill('chest x-rays');

    // Check that search results appear
    await expect(page.locator('.search-results')).toBeVisible();
    await expect(page.locator('text="Chapter 15: Approach to Reading Chest X-Rays"')).toBeVisible();

    // Clear search
    await searchInput.fill('');

    // Search results should disappear
    await expect(page.locator('.search-results')).not.toBeVisible();
  });

  test('should navigate to chapter pages', async ({ page }) => {
    // Expand the chest section
    await page.locator('text="Part 3: Chest Radiology"').click();

    // Click on the new chapter link
    await page.locator('text="Approach To Reading Chest X Rays"').click();

    // Wait for navigation and check URL
    await page.waitForURL('**/Chapter-15-approach-to-reading-chest-x-rays');
    await expect(page).toHaveURL(/.*Chapter-15-approach-to-reading-chest-x-rays/);

    // Check that the page content is visible
    await expect(page.locator('h1:text("Chapter 15: Approach to Reading Chest X-Rays")')).toBeVisible();
  });

  test('should highlight current page in sidebar', async ({ page }) => {
    // Navigate to the new chapter
    await page.goto('http://localhost:3000/part-3-chest/Chapter-15-approach-to-reading-chest-x-rays');

    // Expand the chest section
    await page.locator('text="Part 3: Chest Radiology"').click();

    // Check that the current page is highlighted in the sidebar
    const activeLink = page.locator('text="Approach To Reading Chest X Rays"');
    await expect(activeLink).toBeVisible();
  });

  test('should handle multiple sections', async ({ page }) => {
    // Expand multiple sections
    await page.locator('text="Part 1: Foundation of Medical Imaging"').click();
    await page.locator('text="Part 3: Chest Radiology"').click();

    // Both sections should be expanded
    await expect(page.locator('text="Chapter 1: Introduction to Radiology"')).toBeVisible();
    await expect(page.locator('text="Chapter 2: Physics of Medical Imaging"')).toBeVisible();
    await expect(page.locator('text="Chapter 1: Chest Anatomy"')).toBeVisible();
    await expect(page.locator('text="Chapter 2: Chest Physiology"')).toBeVisible();
    await expect(page.locator('text="Chapter 15: Approach to Reading Chest X-Rays"')).toBeVisible();

    // Collapse one section
    await page.locator('text="Part 1: Foundation of Medical Imaging"').click();

    // Only Part 3 should remain expanded
    await expect(page.locator('text="Chapter 1: Introduction to Radiology"')).not.toBeVisible();
    await expect(page.locator('text="Chapter 2: Physics of Medical Imaging"')).not.toBeVisible();
    await expect(page.locator('text="Chapter 1: Chest Anatomy"')).toBeVisible();
    await expect(page.locator('text="Chapter 2: Chest Physiology"')).toBeVisible();
    await expect(page.locator('text="Chapter 15: Approach to Reading Chest X-Rays"')).toBeVisible();
  });
});