import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpasswordSetComponent } from './newpassword-set.component';

describe('NewpasswordSetComponent', () => {
  let component: NewpasswordSetComponent;
  let fixture: ComponentFixture<NewpasswordSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpasswordSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpasswordSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
