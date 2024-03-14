import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAddEditComponent } from './feedback-add-edit.component';

describe('FeedbackAddEditComponent', () => {
  let component: FeedbackAddEditComponent;
  let fixture: ComponentFixture<FeedbackAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
