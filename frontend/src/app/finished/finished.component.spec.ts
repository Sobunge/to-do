import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedComponent } from './finished.component';

describe('FinishedComponent', () => {
  let component: FinishedComponent;
  let fixture: ComponentFixture<FinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
