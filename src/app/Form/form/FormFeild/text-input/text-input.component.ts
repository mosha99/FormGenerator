import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../../form.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() FieldInfo!: Field;
  @Input() Value!: string;
  @Output() ValueChange: any = new EventEmitter<any>();
  @Input() validClass!: string;

  constructor() {
  }
  ngOnInit(): void {
  }

}
