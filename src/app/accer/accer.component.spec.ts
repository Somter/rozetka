import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccerComponent } from './accer.component';

describe('AccerComponent', () => {
  let component: AccerComponent;
  let fixture: ComponentFixture<AccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
