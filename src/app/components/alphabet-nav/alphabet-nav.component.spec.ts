import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetNavComponent } from './alphabet-nav.component';

describe('AlphabetNavComponent', () => {
  let component: AlphabetNavComponent;
  let fixture: ComponentFixture<AlphabetNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlphabetNavComponent]
    });
    fixture = TestBed.createComponent(AlphabetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
