import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoodDialogComponent } from './add-mood-dialog.component';

describe('AddMoodDialogComponent', () => {
  let component: AddMoodDialogComponent;
  let fixture: ComponentFixture<AddMoodDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoodDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
