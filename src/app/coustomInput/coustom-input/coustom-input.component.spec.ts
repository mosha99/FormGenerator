import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomInputComponent } from './coustom-input.component';

describe('CoustomInputComponent', () => {
  let component: CoustomInputComponent;
  let fixture: ComponentFixture<CoustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoustomInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
