import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnswersComponent } from './get-answers.component';

describe('GetAnswersComponent', () => {
  let component: GetAnswersComponent;
  let fixture: ComponentFixture<GetAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
