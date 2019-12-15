import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosesCalculatorComponent } from './doses-calculator.component';

describe('DosesCalculatorComponent', () => {
  let component: DosesCalculatorComponent;
  let fixture: ComponentFixture<DosesCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosesCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
