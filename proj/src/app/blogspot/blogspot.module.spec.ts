import { BlogspotModule } from './blogspot.module';

describe('BlogspotModule', () => {
  let blogspotModule: BlogspotModule;

  beforeEach(() => {
    blogspotModule = new BlogspotModule();
  });

  it('should create an instance', () => {
    expect(blogspotModule).toBeTruthy();
  });
});
