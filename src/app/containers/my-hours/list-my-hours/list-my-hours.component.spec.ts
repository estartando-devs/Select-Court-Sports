import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyHoursComponent } from './list-my-hours.component';

describe('ListMyHoursComponent', () => {
  let component: ListMyHoursComponent;
  let fixture: ComponentFixture<ListMyHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
