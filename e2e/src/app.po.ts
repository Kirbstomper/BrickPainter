import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getSearchButton() {
    return element(by.buttonText('Search')).getText() as Promise<string>;
  }
  getColorSelectA() {
    return element(by.name('color_a')).getText() as Promise<string>;
  }
  getColorSelectB() {
    return element(by.name('color_b')).getText() as Promise<string>;
  }
}
