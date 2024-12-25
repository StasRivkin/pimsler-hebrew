import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebrewAlphabetComponent } from './hebrew-alphabet.component';

describe('HebrewAlphabetComponent', () => {
  let component: HebrewAlphabetComponent;
  let fixture: ComponentFixture<HebrewAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HebrewAlphabetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HebrewAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
