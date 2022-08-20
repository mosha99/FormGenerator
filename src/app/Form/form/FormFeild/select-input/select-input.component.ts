import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Field, fieldRequestTypeEnum, SelectItem, UrlAndData } from '../../form.component';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() RequestType?: fieldRequestTypeEnum;
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();

  Items: SelectItem[] = new Array<SelectItem>();
  TestItems: SelectItem[] = [
    { selected: false, text: "i1", value: 1 },
    { selected: false, text: "i2", value: 2 },
    { selected: false, text: "i3", value: 3 },
    { selected: false, text: "i4", value: 4 },
    { selected: false, text: "i5", value: 5 },
  ];

  @Input() Name !: string;
  @Input() UrlAndData?: UrlAndData;

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.UrlAndData);
    if (this.UrlAndData?.Data != undefined)
      this.Items = this.TestItems.filter(x => x.value > this.UrlAndData!.Data[0].value)
  }

  ngOnInit(): void {
    if (this.UrlAndData?.Url != undefined) {
      /*
      api.post(this.UrlAndData.Url,this.UrlAndData.data).subscribe((x:any[])=>{
       this.Items =x;
      })
      */
    }
    console.log(this.UrlAndData?.Data);
    if (this.RequestType != fieldRequestTypeEnum.RequestwhenParentSelect)
      this.Items = this.TestItems;

  }

  DataChange(model: any) {
    this.dataChange.emit(model)
  }

  getSelectedIndex() {
    return this.Items.findIndex(x => x.selected == true);
  }

}
