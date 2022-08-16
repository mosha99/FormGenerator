import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feild } from '../../form.component';

@Component({
  selector: 'app-numbr-input',
  templateUrl: './numbr-input.component.html',
  styleUrls: ['./numbr-input.component.css']
})
export class NumbrInputComponent implements OnInit {

  @Input() FeildInfo?: Feild;
  @Input() Value: string = '';
  @Output() OnModelChenge: any = new EventEmitter<any>();

  constructor() {
  }
  ngOnInit(): void {
  }

}
