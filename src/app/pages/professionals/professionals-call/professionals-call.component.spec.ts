import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsCallComponent } from './professionals-call.component';

describe('ProfessionalsCallComponent', () => {
  let component: ProfessionalsCallComponent;
  let fixture: ComponentFixture<ProfessionalsCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalsCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
