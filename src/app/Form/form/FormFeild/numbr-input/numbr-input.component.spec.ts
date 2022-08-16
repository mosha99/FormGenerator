import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbrInputComponent } from './numbr-input.component';

describe('NumbrInputComponent', () => {
  let component: NumbrInputComponent;
  let fixture: ComponentFixture<NumbrInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbrInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
