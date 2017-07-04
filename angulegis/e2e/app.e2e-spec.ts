import { AngulegisPage } from './app.po';

describe('angulegis App', () => {
  let page: AngulegisPage;

  beforeEach(() => {
    page = new AngulegisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
