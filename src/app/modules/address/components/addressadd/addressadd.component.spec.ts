import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressaddComponent } from './addressadd.component';

describe('AddressaddComponent', () => {
  let component: AddressaddComponent;
  let fixture: ComponentFixture<AddressaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
