import { MyactivityModule } from './myactivity.module';

describe('MyactivityModule', () => {
  let myactivityModule: MyactivityModule;

  beforeEach(() => {
    myactivityModule = new MyactivityModule();
  });

  it('should create an instance', () => {
    expect(myactivityModule).toBeTruthy();
  });
});
