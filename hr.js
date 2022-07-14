const puppeteer = require("puppeteer");
const codesObj = require("./codes");
let page;
const browserlaunchpromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
  //slowmo: 20,
});

browserlaunchpromise
  .then(function (browser) {
    let browseropenpromise = browser.newPage();
    return browseropenpromise;
  })
  //hackerrank login page
  .then(function (newTab) {
    page = newTab;
    let hackerrankPromise = page.goto("https://www.hackerrank.com/auth/login");
    return hackerrankPromise;
  })
  .then(function () {
    let emailSelectorWaitPromise = page.waitForSelector('input[type="text"]', {
      visible: true,
    });
    return emailSelectorWaitPromise;
  })
  .then(function () {
    let emailEnteredPromise = page.type(
      'input[type="text"]',
      "loreyi1406@leupus.com",
      { delay: 50 }
    );
    return emailEnteredPromise;
  })
  .then(function () {
    let passwordSelectorWaitPromise = page.waitForSelector(
      'input[type="password"]',
      {
        visible: true,
      }
    );
    return passwordSelectorWaitPromise;
  })
  .then(function () {
    let passwordEneteredPromise = page.type(
      'input[type="password"]',
      "Aditi@1515",
      { delay: 30 }
    );
    return passwordEneteredPromise;
  })
  .then(function () {
    let LoginWaitPromise = page.waitForSelector('button[type="submit"]');
    return LoginWaitPromise;
  })
  .then(function () {
    let loginclickedPromise = page.click('button[type="submit"]');
    return loginclickedPromise;
  })
  //hackerrank dashboard
  .then(function () {
    let topicSelectorWaitPromise = page.waitForSelector(
      'a[href="/domains/algorithms"]'
    );
    return topicSelectorWaitPromise;
  })
  .then(function () {
    page.waitForTimeout(3000);
    let topicSelectedPromise = page.click('a[href="/domains/algorithms"]', {
      delay: 1000,
    });
    return topicSelectedPromise;
  })
  //imside algo section select warmup section
  .then(function () {
    let subdomainSelectorWaitPromise = page.waitForSelector(
      '.checkbox-wrap input[value="warmup"]',
      { delay: 1000 }
    );
    return subdomainSelectorWaitPromise;
  })
  .then(function () {
    let warmupSelectPromise = page.click(
      '.checkbox-wrap input[value="warmup"]'
    );
    return warmupSelectPromise;
  })
  .then(function () {
    let waitFor4secPromise = page.waitForTimeout(4000);
    return waitFor4secPromise;
  })
  .then(function () {
    let solveChallengesPromise = page.$$(".challenge-submit-btn", {
      delay: 50,
    });
    return solveChallengesPromise;
  })
  .then(function (quesArray) {
    console.log("No. of questions in Warmup section: ", quesArray.length);
    //lets solve the question
    page.waitForTimeout(3000);
    let clickQuestionPromise = quesArray[0].click();
    return clickQuestionPromise;
  })
  .then(function () {
    let editorWaitPromise = page.waitForSelector(
      ".monaco-editor.no-user-select.vs"
    );
    return editorWaitPromise;
  })
  //on the question solving page
  .then(function () {
    let onEditorPromise = page.click(".monaco-editor.no-user-select.vs");
    return onEditorPromise;
  })
  .then(function () {
    let customInputcheckPromise = page.click('input[class="checkbox-input"]');
    return customInputcheckPromise;
  })
  .then(function () {
    page.waitForTimeout(3000);
    let customTextAreaPromise = page.click(
      ".custom-input.theme-old.size-medium"
    );
    return customTextAreaPromise;
  })
  .then(function () {
    let answerTypePromise = page.type(
      ".custom-input.theme-old.size-medium",
      codesObj.answers[0],
      { delay: 20 }
    );
    return answerTypePromise;
  })
  .then(function () {
    let ctrlPressedPromise = page.keyboard.down("Control");
    return ctrlPressedPromise;
  })
  .then(function () {
    let ApressedPromise = page.keyboard.press("A", { delay: 100 });
    return ApressedPromise;
  })
  .then(function () {
    let XpressedPromise = page.keyboard.press("X", { delay: 100 });
    return XpressedPromise;
  })
  .then(function () {
    let ctrlUpPromise = page.keyboard.up("Control");
    return ctrlUpPromise;
  })
  .then(function () {
    let mainEditorPromise = page.click(".monaco-editor.no-user-select.vs");
    return mainEditorPromise;
  })
  .then(function () {
    let ctrlPressedPromise = page.keyboard.down("Control");
    return ctrlPressedPromise;
  })
  .then(function () {
    let ApressedPromise = page.keyboard.press("A", { delay: 100 });
    return ApressedPromise;
  })
  .then(function () {
    let VpressedPromise = page.keyboard.press("V", { delay: 100 });
    return VpressedPromise;
  })
  .then(function () {
    let ctrlPressedPromise = page.keyboard.down("Control");
    return ctrlPressedPromise;
  })
  .then(function () {
    let runcodeWaitPromise = page.waitForSelector(
      ".ui-btn.ui-btn-normal.ui-btn-secondary.pull-right"
    );
    return runcodeWaitPromise;
  })
  .then(function () {
    let runcodeClick = page.click(
      ".ui-btn.ui-btn-normal.ui-btn-secondary.pull-right",
      { delay: 40 }
    );
    return runcodeClick;
  })
  .then(function(){
    let submitWaitPromise = page.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-primary');
    return submitWaitPromise;
  })
  .then(function(){
    let submitClickPromise = page.click('.ui-btn.ui-btn-normal.ui-btn-primary',{delay:100});
    return submitClickPromise;
  })
  .catch(function (err) {
    console.log(err);
  });
