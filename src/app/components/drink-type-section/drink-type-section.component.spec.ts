import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkTypeSectionComponent } from './drink-type-section.component';

describe('DrinkTypeSectionComponent', () => {
  let component: DrinkTypeSectionComponent;
  let fixture: ComponentFixture<DrinkTypeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrinkTypeSectionComponent]
    });
    fixture = TestBed.createComponent(DrinkTypeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
