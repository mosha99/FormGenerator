import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }


  Feilds: any[] = [
          {
        "fieldName": "title",
        "fieldTitle": "عنوان",
        "fieldRowId": 1,
        "fieldColId": 1,
        "fieldRejex": "",
        "fieldRejexMassage": "",
        "isRequierd": true,
        "isRequierdMessage": "",
        "fieldType": "string",
        "defulteValue": "string"
      },
      {
        "fieldName": "count",
        "fieldTitle": "تعداد",
        "fieldRowId": 2,
        "fieldColId": 1,
        "fieldRejex": "",
        "fieldRejexMassage": "",
        "isRequierd": true,
        "isRequierdMessage": "",
        "fieldType": "int",
        "defulteValue": "string"
      }
  ];

  ngOnInit(): void {
    let x = this.getRow();
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
