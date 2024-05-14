import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssusComponent } from './assus.component';

describe('AssusComponent', () => {
  let component: AssusComponent;
  let fixture: ComponentFixture<AssusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
