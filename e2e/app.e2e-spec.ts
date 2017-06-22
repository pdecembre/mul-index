import { MulIndexPage } from './app.po';

describe('mul-index App', () => {
  let page: MulIndexPage;

  beforeEach(() => {
    page = new MulIndexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
