

import {expect } from '@playwright/test'
import { test } from '../fixtures/loginfix.js'

test('Add Product', async ({ loggedInPage }) => {

    await loggedInPage.locator('.inventory_item').first().click()
    await loggedInPage.waitForTimeout(3000)
});