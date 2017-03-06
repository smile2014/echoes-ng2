import { EchoesPlayerPage } from './app.po';

describe('echoes-player App', () => {
  let page: EchoesPlayerPage;

  beforeEach(() => {
    page = new EchoesPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
