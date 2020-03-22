module.exports = async (browser, context) => {
  // this is not a real login scenario. 
  const page = await browser.newPage();
  await page.goto('https://www.gurucharan.in/about/');
  await page.goto('https://www.gurucharan.in/speaking-engagements/');
  //await page.type('#username', 'admin');
  //await page.type('#password', 'password');
  //await page.screenshot({ path: 'example.png' });
  await Promise.all([
    page.click('[type="submit"]'), 
    page.waitForNavigation()]);
  await page.close();
};
