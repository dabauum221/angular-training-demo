import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: 'bindings.component.html',
})
export class BindingsComponent {
  name: string = 'yellow';

  alertName(): void {
    alert(`${this.name} was clicked`);
  }
}
