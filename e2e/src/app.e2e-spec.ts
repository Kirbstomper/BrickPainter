import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('BrickPaint!');
  });

  it('should display a Search button', () => {
     page.navigateTo();
     expect(page.getSearchButton()).toEqual('Search');
  });

  it('should display 2 color menus', () => {
      page.navigateTo();
      expect(page.getColorSelectA()).toContain('Blue'); // Contains colors
      expect(page.getColorSelectB()).toContain('Red');
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
