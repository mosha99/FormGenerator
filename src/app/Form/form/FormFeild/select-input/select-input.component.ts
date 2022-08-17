import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../../form.component';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {

  @Input() FieldInfo!: Field;
  @Input() Value!: string ;
  @Output() ValueChange: any = new EventEmitter<any>();
  @Input() validClass!: string;

  constructor() {
  }
  ngOnInit(): void {
  }

}
