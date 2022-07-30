import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpErrorComponent } from './otp-error.component';

describe('OtpErrorComponent', () => {
  let component: OtpErrorComponent;
  let fixture: ComponentFixture<OtpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
