import { test } from '@playwright/test';

test('Renders correctly', async ({ page }) => {
  await page.goto('/');
});
