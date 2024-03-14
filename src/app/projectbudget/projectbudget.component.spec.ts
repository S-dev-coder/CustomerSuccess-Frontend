import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectbudgetComponent } from './projectbudget.component';

describe('ProjectbudgetComponent', () => {
  let component: ProjectbudgetComponent;
  let fixture: ComponentFixture<ProjectbudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectbudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
