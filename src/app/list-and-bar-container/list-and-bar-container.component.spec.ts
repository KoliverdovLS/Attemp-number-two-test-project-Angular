import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAndBarContainerComponent } from './list-and-bar-container.component';

describe('ListAndBarContainerComponent', () => {
  let component: ListAndBarContainerComponent;
  let fixture: ComponentFixture<ListAndBarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAndBarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAndBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
