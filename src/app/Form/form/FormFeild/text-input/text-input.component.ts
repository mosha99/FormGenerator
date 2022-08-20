import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Field } from '../../form.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {


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
