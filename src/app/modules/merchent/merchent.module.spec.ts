import { MerchentModule } from './merchent.module';

describe('MerchentModule', () => {
  let merchentModule: MerchentModule;

  beforeEach(() => {
    merchentModule = new MerchentModule();
  });

  it('should create an instance', () => {
    expect(merchentModule).toBeTruthy();
  });
});
