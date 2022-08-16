import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-coustom-input',
  templateUrl: './coustom-input.component.html',
  styleUrls: ['./coustom-input.component.css']
})
export class CoustomInputComponent implements OnInit {

  @Input() type: string = "";

  @Input() value: string = "";

  @Output() onValueChenge: EventEmitter<any> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {

  }

  onchenge(value:any){
    this.onValueChenge.emit(value);
  }
}

