import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Field, fieldRequestTypeEnum, SelectItem } from '../../form.component';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit, OnChanges {

  @Input() FieldInfo!: Field;
  @Input() Value!: number;
  @Output() ValueChange: any = new EventEmitter<any>();
  @Input() validClass!: string;

  Items: Array<SelectItem> = new Array<SelectItem>();

  selectedItem: number = 0;

  testItem: Array<SelectItem> = [
    { text: 'item 1 - 1', value: 11 },
    { text: 'item 1 - 2', value: 12 },
    { text: 'item 1 - 3', value: 13 },
    { text: 'item 1 - 4', value: 14 },
    { text: 'item 2 - 1', value: 21 },
    { text: 'item 2 - 2', value: 22 },
    { text: 'item 2 - 3', value: 23 },
    { text: 'item 2 - 4', value: 24 },
    { text: 'item 3 - 1', value: 31 },
    { text: 'item 3 - 2', value: 32 },
    { text: 'item 3 - 3', value: 33 },
    { text: 'item 3 - 4', value: 34 }
  ]


  ItemInitialize() {
    switch (this.FieldInfo.fieldRequestType) {

      case fieldRequestTypeEnum.RequestWhenLoad:
        this.Items = this.testItem;
        break;
      case fieldRequestTypeEnum.RequestwhenParentSelect: 
        if(this.Value == 0) return;

        let val:number = this.Value , mx:number = val-(-5) , mn:number =val-5 ;
        this.Items = this.testItem.filter(x => (x.value >= mn && x.value <= mx));
        break;
      case fieldRequestTypeEnum.InitialazeDefultValue:
        this.Items = this.FieldInfo.defulteValue;
        break;
      default:
        this.Items = this.testItem;
        break;
    }
  }




  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ItemInitialize();
  }
  ngOnInit(): void {
  }

}
