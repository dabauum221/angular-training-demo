import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableUnsubscribeComponent } from './observable-unsubscribe.component';

describe('ObservableUnsubscribeComponent', () => {
  let component: ObservableUnsubscribeComponent;
  let fixture: ComponentFixture<ObservableUnsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableUnsubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
