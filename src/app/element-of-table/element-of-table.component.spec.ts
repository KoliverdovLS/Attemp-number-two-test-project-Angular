import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementOfTableComponent } from './element-of-table.component';

describe('ElementOfTableComponent', () => {
  let component: ElementOfTableComponent;
  let fixture: ComponentFixture<ElementOfTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementOfTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementOfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
