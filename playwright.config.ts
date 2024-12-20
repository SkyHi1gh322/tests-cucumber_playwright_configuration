import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/playwright/tests', // tests folder,
  testMatch: '**/*.js',
  use: {
    headless: false,
    trace: 'on', // stack trace for debug
    screenshot: 'on', // screenshot when tests was failed
    video: 'retain-on-failure', // generate video while something went wrong
  },
});
