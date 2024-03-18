import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionhistoryAddEditComponent } from './versionhistory-add-edit.component';

describe('VersionhistoryAddEditComponent', () => {
  let component: VersionhistoryAddEditComponent;
  let fixture: ComponentFixture<VersionhistoryAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionhistoryAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersionhistoryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
