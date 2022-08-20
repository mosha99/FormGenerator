import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../../form.component';

@Component({
  selector: 'app-numbr-input',
  templateUrl: './numbr-input.component.html',
  styleUrls: ['./numbr-input.component.css']
})
export class NumbrInputComponent implements OnInit {

  @Input() data: any;
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() Name !: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  DataChange(model: any) {
    this.dataChange.emit(this.data)
  }
}
