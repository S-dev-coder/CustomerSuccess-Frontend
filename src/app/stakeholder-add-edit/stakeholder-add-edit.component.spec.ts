import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderAddEditComponent } from './stakeholder-add-edit.component';

describe('StakeholderAddEditComponent', () => {
  let component: StakeholderAddEditComponent;
  let fixture: ComponentFixture<StakeholderAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StakeholderAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakeholderAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
