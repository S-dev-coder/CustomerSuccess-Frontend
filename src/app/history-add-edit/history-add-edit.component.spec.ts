import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAddEditComponent } from './history-add-edit.component';

describe('HistoryAddEditComponent', () => {
  let component: HistoryAddEditComponent;
  let fixture: ComponentFixture<HistoryAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
