
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    launchOptions:{
      slowMo:300
    }
  },
  retries: 1,
  workers: 1
});
