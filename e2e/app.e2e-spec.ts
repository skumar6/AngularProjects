import { HttpTestPage } from './app.po';

describe('http-test App', () => {
  let page: HttpTestPage;

  beforeEach(() => {
    page = new HttpTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
