import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Custom Restaurant' }).click()
  await page.getByText("Business' Profile").click()

  await page.getByLabel('Name').fill('Pizza Shop')
  await page.getByLabel('Description').fill('Another description')

  await page.getByRole('button', { name: 'Save' }).click()

  await page.waitForLoadState('networkidle') // aguarda chamada http finalizar

  const toast = page.getByText('Profile updated successfully')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Pizza Shop' })).toBeVisible()
})
