import { not } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { CoustomInputComponent } from 'src/app/coustomInput/coustom-input/coustom-input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  Events: EventEmitter<any>[] = new Array<EventEmitter<any>>();


  Feilds: Feild[] = [
    {

      "fieldId": 1,
      "fieldParentId": undefined,
      "fieldName": "title",
      "fieldTitle": "عنوان",
      "fieldRowId": 1,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexMassage": "",
      "isRequierd": true,
      "isRequierdMessage": "",
      "fieldType": fieldTypeEnum.int,
      "defulteValue": "string"
    }
    ,{
      "fieldName": "count1",
      "fieldId": 2,
      "fieldParentId": 1,
      "fieldTitle": "تعداد",
      "fieldRowId": 2,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexMassage": "",
      "isRequierd": true,
      "isRequierdMessage": "",
      "fieldType": fieldTypeEnum.steing,
      "defulteValue": "string"
    }
    ,{
      "fieldName": "count2",
      "fieldId": 3,
      "fieldParentId": 2,
      "fieldTitle": "تعداد",
      "fieldRowId": 2,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexMassage": "",
      "isRequierd": true,
      "isRequierdMessage": "",
      "fieldType": fieldTypeEnum.int,
      "defulteValue": "string"
    }
    ,{
      "fieldName": "count3",
      "fieldId": 4,
      "fieldParentId": 3,
      "fieldTitle": "تعداد",
      "fieldRowId": 2,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexMassage": "",
      "isRequierd": true,
      "isRequierdMessage": "",
      "fieldType": fieldTypeEnum.steing,
      "defulteValue": "string"
    }
  ];

  ngOnInit(): void {
    this.Feilds.forEach(element => {

      let Events = new EventEmitter<number[]>();
      element.onchenge = Events;
      this.Feilds.filter(x => x.fieldParentId == element.fieldId).forEach(e => {
        e.ParentOnchenge = Events;
      });

    });

  }


  getRow(): number[] {
    let Row: number[] = [];
    this.Feilds.map(x => x.fieldRowId).forEach(element => {
      if (Row.findIndex(x => x == element) == -1) {
        Row.push(element);
      }
    });


    return Row;
  }

  getRowFeilds(num: number): any[] {
    let filds = this.Feilds.filter(x => x.fieldRowId == num);
    return filds;
  }

} 


export interface Feild{
   fieldName :string ,
   fieldId : number,
   fieldParentId? : number,
   fieldTitle :  string ,
   fieldRowId : number,
   fieldColId : number,
   fieldRejex :  string ,
   fieldRejexMassage :  string ,
   isRequierd : boolean,
   isRequierdMessage :  string ,
   fieldType :  fieldTypeEnum ,
   defulteValue :  any ,
   onchenge ?:EventEmitter<number[]>,
   ParentOnchenge ?:EventEmitter<number[]>,
}


export enum fieldTypeEnum{
  steing,
  int
}