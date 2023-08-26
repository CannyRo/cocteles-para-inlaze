import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksListByLetterComponent } from './drinks-list-by-letter.component';

describe('DrinksListByLetterComponent', () => {
  let component: DrinksListByLetterComponent;
  let fixture: ComponentFixture<DrinksListByLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DrinksListByLetterComponent]
    });
    fixture = TestBed.createComponent(DrinksListByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
