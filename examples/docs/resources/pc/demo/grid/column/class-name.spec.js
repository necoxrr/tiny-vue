import { test, expect } from '@playwright/test'

test('列样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-custom-style/column-class-name')
  await expect(page.locator('.gridClassName')).toHaveCount(8)
})