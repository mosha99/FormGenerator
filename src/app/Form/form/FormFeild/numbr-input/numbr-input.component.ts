import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../../form.component';

@Component({
  selector: 'app-numbr-input',
  templateUrl: './numbr-input.component.html',
  styleUrls: ['./numbr-input.component.css']
})
export class NumbrInputComponent implements OnInit {

  @Input() FieldInfo!: Field;
  @Input() Value!: string;
  @Output() ValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() validClass!: string;

  constructor() {
  }

  ngOnInit(): void {
  }


}
