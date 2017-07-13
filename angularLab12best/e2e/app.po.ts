import { browser, by, element } from 'protractor';

export class AngularLab12bestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
