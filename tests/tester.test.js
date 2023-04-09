/*
- User navigates to the URL where the app is running ✅
- User types a username/name into the "Name" input ✅
- Input should now contain the name they've entered ✅
- User types a tweet into the "Tweet" text area ✅
- Text area should now contain the tweet they've entered ✅
- User clicks on the "Send tweet!" button ✅
- Both the input and text area should have been cleared, and a new entry should have been added to the list ✅
*/
import { test, expect } from '@playwright/test';

test('user can send a tweet', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('input[name="tweeter"]','Arwa');
  await expect(page.locator('input[name="tweeter"]')).toHaveValue('Arwa');
  await page.fill('textarea[name="tweet"]', 'Hey SuperTester, do you even UI test, bro? Just kidding, we all know API testing is where the real fun is at. ;)');
  await expect(page.locator('textarea[name="tweet"]')).toHaveValue('Hey SuperTester, do you even UI test, bro? Just kidding, we all know API testing is where the real fun is at. ;)');
  await page.click('button:has-text("Send tweet!")');
  await expect(page.locator('input[name="tweeter"]')).toHaveValue('');
  await expect(page.locator('textarea[name="tweet"]')).toHaveValue('');
  await expect(page.locator('#tweets-list li:nth-child(4)')).toHaveText('Arwa Hey SuperTester, do you even UI test, bro? Just kidding, we all know API testing is where the real fun is at. ;)');
});