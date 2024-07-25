import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel("Company's name").fill('Custom Restaurant')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('E-mail address').fill('johndoe@example.com')
  await page.getByLabel('Phone number').fill('43234231')
  await page.getByRole('button', { name: 'Create account' }).click()

  const toast = page.getByText('Restaurant created successfully!')

  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel("Company's name").fill('Invalid name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('E-mail address').fill('johndoe@example.com')
  await page.getByLabel('Phone number').fill('43234231')
  await page.getByRole('button', { name: 'Create account' }).click()

  const toast = page.getByText('An error occurred. Please try again.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/signin')
})
