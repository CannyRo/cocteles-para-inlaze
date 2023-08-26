import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkInstructionsComponent } from './drink-instructions.component';

describe('DrinkInstructionsComponent', () => {
  let component: DrinkInstructionsComponent;
  let fixture: ComponentFixture<DrinkInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrinkInstructionsComponent]
    });
    fixture = TestBed.createComponent(DrinkInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
