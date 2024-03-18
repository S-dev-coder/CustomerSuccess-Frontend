import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskprofileAddEditComponent } from './riskprofile-add-edit.component';

describe('RiskprofileAddEditComponent', () => {
  let component: RiskprofileAddEditComponent;
  let fixture: ComponentFixture<RiskprofileAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskprofileAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskprofileAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
