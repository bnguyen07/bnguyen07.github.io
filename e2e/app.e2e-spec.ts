import { MyBioPage } from './app.po';

describe('my-bio App', () => {
  let page: MyBioPage;

  beforeEach(() => {
    page = new MyBioPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
