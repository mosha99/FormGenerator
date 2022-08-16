import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feild } from '../../form.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() FeildInfo?: Feild;
  @Input() Value: string = '';
  @Output() OnModelChenge: any = new EventEmitter<any>();

  constructor() {
  }
  ngOnInit(): void {
  }

}
