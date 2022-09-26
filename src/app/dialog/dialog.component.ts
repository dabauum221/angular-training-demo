import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnChanges {

  @Input()
  isOpen = false;

  @Input()
  title = 'Title';

  @Output()
  onClose = new EventEmitter<string>();

  constructor() {
    console.log('CONSTRUCTOR');
  }

  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Dialog closed');
  }

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NG ON CHANGES', changes);
  }
}
