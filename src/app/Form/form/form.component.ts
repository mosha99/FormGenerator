import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoustomInputComponent } from 'src/app/coustomInput/coustom-input/coustom-input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  InputStateList: EventEmitter<FieldsState> = new EventEmitter<FieldsState>();

  submitEvents: EventEmitter<any> = new EventEmitter<any>();
  @Output() GetformResult: EventEmitter<any> = new EventEmitter<any>();

  FieldsStates: Array<FieldsState> = new Array<FieldsState>();

  Fields: Field[] = [
    {

      "fieldId": 1,
      "fieldName": "title",
      "fieldTitle": "عنوان",
      "fieldRowId": 1,
      "fieldColId": 1,
      "fieldRejex":undefined, //^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "fieldRejexmessage": "این فیلد نامعتبر است",
      "isRequierd": false,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.steing,
      "defulteValue": "string"
    }
    , {
      "fieldName": "count1",
      "fieldId": 2,
      "fieldTitle": "تعداد",
      "fieldRowId": 2,
      "fieldColId": 1,
      "fieldRejex": undefined,
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.steing,
      "defulteValue": "string",

      "Parents": {
        parentsId: [1, 6],
        stringFunction: `function(parentsvalue){ 
          let valid = parentsvalue.find(x=>x.fieldId == 1)?.value > 22 && parentsvalue.find(x=>x.fieldId == 6)?.value == 4
          return valid;
          }`
      }
    }
    , {
      "fieldName": "select3",
      "fieldId": 3,
      "fieldTitle": "آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRejex": undefined,
      "fieldRejexmessage": "",
      "fieldRequestUrl": "US.COM",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "defulteValue": "string"
    },
    {
      "fieldName": "select4",
      "fieldId": 4,
      "fieldTitle": "2آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRejex": undefined,
      "fieldRequestUrl": "YOU.COM",
      "fieldRequestType": fieldRequestTypeEnum.RequestwhenParentSelect,
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "defulteValue": "string",
      "Parents": {
        parentsId: [3],
      }
    },
    {
      "fieldName": "select5",
      "fieldId": 5,
      "fieldTitle": "3آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRequestUrl": 'ME.COM',
      "fieldRequestType": fieldRequestTypeEnum.RequestwhenParentSelect,
      "fieldRejex": undefined,
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "defulteValue": "string",
      "Parents": {
        parentsId: [4],
      }
    },
    {
      "fieldName": "select6",
      "fieldId": 6,
      "fieldTitle": "4آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRequestUrl": 'oo.COM',
      "fieldRequestType": fieldRequestTypeEnum.RequestwhenParentSelect,
      "fieldRejex": undefined,
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "defulteValue": "string",
      "Parents": {
        parentsId: [5],
      }
    },
  ];


  ngOnInit(): void {
    //init Events And parents
    this.Fields.forEach(field => {

      let thisFieldEvent: EventEmitter<FieldsState> = new EventEmitter<FieldsState>();

      let fieldEvent: FieldEvents = {
        onChange: thisFieldEvent,
        formListener: this.InputStateList,
      }
      field.Events = fieldEvent;
    });
    this.Fields.forEach(field => {
      //set parent events
      if (field.Parents != undefined && field.Parents?.parentsId?.length >= 1) {
        let pI: number[] = field.Parents?.parentsId;
        let events = this.Fields.filter(x => pI.findIndex(z => z == x.fieldId) != -1).map(x => x.Events!.onChange);
        field.Events!.ParentsChanges = events;
      }
      let Sf = field.Parents?.stringFunction;
      if (Sf != undefined) {
        var func = new Function("return (" + Sf + ")")();
        field.Parents!.isView = func;
      }
    });
    // end

    this.Fields.map(y => y.Events!.onChange).forEach(e => {
      e.subscribe((data: FieldsState) => {
        let index = this.FieldsStates.findIndex(x => x.fieldId == data.fieldId);
        if (index == -1) {
          if (this.FieldsStates == undefined) this.FieldsStates = new Array<FieldsState>();
          this.FieldsStates.push(data);
        } else {
          this.FieldsStates[index].value = data.value;
          this.FieldsStates[index].Error = data.Error;
        }
      });
    })

    this.submitEvents.subscribe(() => {
      let ErrorCount = this.FieldsStates.filter(y => y.Error == true);
      if (ErrorCount.length > 0) alert('error');
      else {

        const clone = JSON.parse(JSON.stringify(this.FieldsStates));

        this.GetformResult.emit(clone);
      }
    })

  }


  getRow(): number[] {
    let Row: number[] = [];
    this.Fields.map(x => x.fieldRowId).forEach(element => {
      if (Row.findIndex(x => x == element) == -1) {
        Row.push(element);
      }
    });


    return Row;
  }
  getRowFields(num: number): any[] {
    let filds = this.Fields.filter(x => x.fieldRowId == num);
    return filds;

  }

}


export interface Field {
  fieldName: string,
  fieldId: number,

  fieldRequestUrl?: string,
  fieldRequestType?: fieldRequestTypeEnum,

  fieldTitle: string,
  fieldRowId: number,
  fieldColId: number,
  fieldType: fieldTypeEnum,
  defulteValue: any,


  //validation 
  fieldRejex?: string | RegExp,
  fieldRejexmessage: string,
  isRequierd: boolean,
  isRequierdMessage: string,
  //validation End

  Events?: FieldEvents,// => از فرانت پر میشود
  Parents?: parents,
}

export interface parents {
  parentsId: number[],
  stringFunction?: string,
  isView?: (params: any[]) => boolean, //  => از فرانت پر میشود
}
export enum fieldRequestTypeEnum {
  RequestWhenLoad,
  RequestwhenParentSelect,
}

export enum fieldTypeEnum {
  steing,
  int,
  SelectInput
}

export interface SelectItem {
  value: number,
  text: string,
  selected: boolean
}
export interface FieldEvents {
  onChange: EventEmitter<FieldsState>,
  formListener: EventEmitter<FieldsState>,
  ParentsChanges?: EventEmitter<FieldsState>[],
}



export interface UrlAndData {
  Url: string,
  Data: any
}

export interface FieldsState {
  value: any,
  fieldId: number,
  Error: boolean,
};




