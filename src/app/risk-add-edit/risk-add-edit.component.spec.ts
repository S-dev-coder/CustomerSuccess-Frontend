import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAddEditComponent } from './risk-add-edit.component';

describe('RiskAddEditComponent', () => {
  let component: RiskAddEditComponent;
  let fixture: ComponentFixture<RiskAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
