import { StoreAppPage } from './app.po';

describe('store-app App', function() {
  let page: StoreAppPage;

  beforeEach(() => {
    page = new StoreAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
