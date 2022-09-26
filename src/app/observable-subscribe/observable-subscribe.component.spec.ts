import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSubscribeComponent } from './observable-subscribe.component';

describe('ObservableSubscribeComponent', () => {
  let component: ObservableSubscribeComponent;
  let fixture: ComponentFixture<ObservableSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
