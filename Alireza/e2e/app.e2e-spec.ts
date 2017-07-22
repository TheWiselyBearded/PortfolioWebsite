import { AlirezaPage } from './app.po';

describe('alireza App', () => {
  let page: AlirezaPage;

  beforeEach(() => {
    page = new AlirezaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
