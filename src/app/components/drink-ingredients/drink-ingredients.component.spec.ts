import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIngredientsComponent } from './drink-ingredients.component';

describe('DrinkIngredientsComponent', () => {
  let component: DrinkIngredientsComponent;
  let fixture: ComponentFixture<DrinkIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrinkIngredientsComponent]
    });
    fixture = TestBed.createComponent(DrinkIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
