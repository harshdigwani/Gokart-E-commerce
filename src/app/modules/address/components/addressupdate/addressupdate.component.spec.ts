import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressupdateComponent } from './addressupdate.component';

describe('AddressupdateComponent', () => {
  let component: AddressupdateComponent;
  let fixture: ComponentFixture<AddressupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
