import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksListByIngredientComponent } from './drinks-list-by-ingredient.component';

describe('DrinksListByIngredientComponent', () => {
  let component: DrinksListByIngredientComponent;
  let fixture: ComponentFixture<DrinksListByIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrinksListByIngredientComponent]
    });
    fixture = TestBed.createComponent(DrinksListByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
