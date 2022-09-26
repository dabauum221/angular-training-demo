import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showDialog = false;

  constructor() {}

  ngOnInit(): void {}

  dialogClosed(event: string): void {
    console.log(event);
    this.showDialog = false;
  }
}
