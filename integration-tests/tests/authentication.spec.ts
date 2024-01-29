import { test, expect } from '@playwright/test';

test('Entering website unauthenticated will redirect to login page', async ({
  page,
}) => {
  await page.goto('/');

  await page.waitForURL('/login');
});

test('Example student can log in with his email and password', async ({
  page,
}) => {
  await page.goto('/login');

  await page.getByLabel('Email address').fill('student@example.com');
  await page.getByLabel('Password').fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  // wait for the page to redirect to the home page
  await page.waitForURL('');

  // Use expect to check if the account of the student is visible
  await expect(page.getByLabel('account of current user')).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('Hi, John Student!');
});

test('New user can register and will be redirected to the home page', async ({
  page,
}) => {
  await page.goto('/register');

  await page.getByLabel('Name').fill('Bob');
  const randomEmail =
    Math.random().toString(36).substring(2, 15) + '@example.com';
  await page.getByLabel('Email Address').fill(randomEmail);
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Register' }).click();

  // wait for the page to redirect to the home page
  await page.waitForURL('');

  // Use expect to check if the account of the student is visible
  await expect(page.getByLabel('account of current user')).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('Hi, Bob!');
});
