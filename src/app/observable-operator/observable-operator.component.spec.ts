import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOperatorComponent } from './observable-operator.component';

describe('ObservableOperatorComponent', () => {
  let component: ObservableOperatorComponent;
  let fixture: ComponentFixture<ObservableOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
