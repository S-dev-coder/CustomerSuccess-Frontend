import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomAddEditComponent } from './mom-add-edit.component';

describe('MomAddEditComponent', () => {
  let component: MomAddEditComponent;
  let fixture: ComponentFixture<MomAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MomAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
