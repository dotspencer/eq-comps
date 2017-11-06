var puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.lds.org/htvt/services/v1/4065/members');

  await page.evaluate(() => {
    var loginElements = document.querySelectorAll('#login input');
    var username = loginElements[0];
    var password = loginElements[1];
    username.value = "spencer";
    password.value = "smith";
  });

  await page.screenshot({path: 'example.png'});
  await browser.close();
})();
