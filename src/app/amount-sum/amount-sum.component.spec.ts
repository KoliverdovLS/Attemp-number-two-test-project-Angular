import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountSumComponent } from './amount-sum.component';

describe('AmountSumComponent', () => {
  let component: AmountSumComponent;
  let fixture: ComponentFixture<AmountSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
