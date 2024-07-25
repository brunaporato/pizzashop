import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Next page' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Last page' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 51', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Previous page' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 41', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'First page' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder("Order's ID").fill('order-11')
  await page.getByRole('button', { name: 'Filter orders' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder("Customer's name").fill('Customer 11')
  await page.getByRole('button', { name: 'Filter orders' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pending').click()
  await page.getByRole('button', { name: 'Filter orders' }).click()

  const tableRows = await page.getByRole('cell', { name: 'Pending' }).all()

  expect(tableRows.length).toBe(10)
})
