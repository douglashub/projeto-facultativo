import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsChatComponent } from './professionals-chat.component';

describe('ProfessionalsChatComponent', () => {
  let component: ProfessionalsChatComponent;
  let fixture: ComponentFixture<ProfessionalsChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalsChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
