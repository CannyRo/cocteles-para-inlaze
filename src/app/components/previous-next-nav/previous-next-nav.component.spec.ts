import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousNextNavComponent } from './previous-next-nav.component';

describe('PreviousNextNavComponent', () => {
  let component: PreviousNextNavComponent;
  let fixture: ComponentFixture<PreviousNextNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PreviousNextNavComponent]
    });
    fixture = TestBed.createComponent(PreviousNextNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
