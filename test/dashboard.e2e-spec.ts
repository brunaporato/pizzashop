import { expect, test } from '@playwright/test'

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% over yesterday')).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('+ 13% over last month')).toBeVisible()
})

test('display month canceled orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('+ 3% over last month')).toBeVisible()
})

test('display monthly income metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('$2,000.00')).toBeVisible()
  expect(page.getByText('+ 10% over last month')).toBeVisible()
})
