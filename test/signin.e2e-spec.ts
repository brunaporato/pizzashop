import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText(
    'An authentication link has been sent to your e-mail address.',
  )

  expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText('An error occurred. Please try again.')

  expect(toast).toBeVisible()
})

test('navigate to new partner page', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New partner' }).click()

  expect(page.url()).toContain('/signup')
})
