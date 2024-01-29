import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByLabel('Email address').fill('student@example.com');
  await page.getByLabel('Password').fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  // wait for the page to redirect to the home page
  await page.waitForURL('http://localhost:3000');
});

test('It shows the list of all documents', async ({ page }) => {
  await page.goto('localhost:3000/documents');

  await expect(page.getByRole('list')).toContainText('Document 1');
  await expect(page.getByRole('list')).toContainText('Document 2');
});

test('Clicking on a document leads to editing it', async ({ page }) => {
  await page.goto('localhost:3000/documents');

  await page.waitForSelector('text=Document 1');
  await page.click('text=Document 1');
  await page.waitForURL('http://localhost:3000/documents/1');
});

test('In document overview you see all fields of the document', async ({
  page,
}) => {
  await page.goto('localhost:3000/documents/1');

  await expect(page.getByLabel('major')).toHaveValue('Software Engineering');
});

test('Editing a field will save it in the database', async ({ page }) => {
  await page.goto('localhost:3000/documents/1');

  await page.getByLabel('name').fill('John');
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.waitForURL('localhost:3000/documents')

  await page.goto('localhost:3000/documents/2');
  await expect(page.getByLabel('name')).toHaveValue('John');
});
