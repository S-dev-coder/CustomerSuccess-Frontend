import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddEditComponent } from './update-add-edit.component';

describe('UpdateAddEditComponent', () => {
  let component: UpdateAddEditComponent;
  let fixture: ComponentFixture<UpdateAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
