import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';
import {TwoWayDataBindingExampleComponent} from './two-way-data-binding-example/two-way-data-binding-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BindingsComponent} from './bindings';
import { MenuComponent } from './menu/menu.component';
import {TemplateDrivenFormComponent} from './forms/template-driven-form.component';
import {ReactiveFormComponent} from './forms/reactive-form.component';
import { CreditCardValidatorDirective } from './forms/credit-card-validator.directive';
import {HidingComponent} from './hiding/hiding.component';
import {ModelComponent} from './model/model.component';
import {ObservableExampleComponent} from './observable-example/observable-example.component';
import {NgforComponent} from './ngfor/ngfor.component';
import {NgClassComponent} from './ngclass/ng-class.component';
import {NgSwitchComponent} from './ngswitch/ng-switch.component';
import {PromiseExampleComponent} from './promise-example/promise-example.component';
import {SubjectExampleComponent} from './subject-example/subject-example.component';
import {SpinnerComponent} from './spinner/spinner.component';
import { WrapperComponent } from './spinner/wrapper.component';
import {MessageComponent} from './two-way-data-binding-example/message.component';
import { StateFilterComponent } from './state-filter/state-filter.component';
import {HttpClientModule} from '@angular/common/http';
import { ObservableSubscribeComponent } from './observable-subscribe/observable-subscribe.component';
import { ObservableUnsubscribeComponent } from './observable-unsubscribe/observable-unsubscribe.component';
import { ObservableOperatorComponent } from './observable-operator/observable-operator.component';
import { ObservableOperatorsComponent } from './observable-operators/observable-operators.component';
import { Component1Component } from './subject-example/component1/component1.component';
import { Component2Component } from './subject-example/component2/component2.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ListPostsComponent, ObservableExampleComponent,
    TwoWayDataBindingExampleComponent, MessageComponent,
    MenuComponent,
    TemplateDrivenFormComponent, ReactiveFormComponent, CreditCardValidatorDirective,
    HidingComponent, ModelComponent,
    NgforComponent, NgClassComponent, NgSwitchComponent,
    PromiseExampleComponent, SubjectExampleComponent, SpinnerComponent, WrapperComponent, StateFilterComponent,
    ObservableSubscribeComponent, ObservableUnsubscribeComponent, ObservableOperatorComponent, ObservableOperatorsComponent, Component1Component, Component2Component, DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule, routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
