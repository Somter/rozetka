import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogitachComponent } from './logitach.component';

describe('LogitachComponent', () => {
  let component: LogitachComponent;
  let fixture: ComponentFixture<LogitachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogitachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogitachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
