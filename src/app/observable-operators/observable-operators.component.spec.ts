import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOperatorsComponent } from './observable-operators.component';

describe('ObservableOperatorsComponent', () => {
  let component: ObservableOperatorsComponent;
  let fixture: ComponentFixture<ObservableOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
