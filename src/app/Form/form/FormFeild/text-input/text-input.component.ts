import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Field } from '../../form.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, OnChanges {

  @Input() FieldInfo!: Field;

  @Input() ParentValue!: string;

  @Input() Value!: string;
  @Output() ValueChange: any = new EventEmitter<any>();
  @Input() validClass!: string;

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    this.Value = this.ParentValue;
  }
  ngOnInit(): void {
  }

}
