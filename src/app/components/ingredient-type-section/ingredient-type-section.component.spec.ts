import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientTypeSectionComponent } from './ingredient-type-section.component';

describe('IngredientTypeSectionComponent', () => {
  let component: IngredientTypeSectionComponent;
  let fixture: ComponentFixture<IngredientTypeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IngredientTypeSectionComponent]
    });
    fixture = TestBed.createComponent(IngredientTypeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
