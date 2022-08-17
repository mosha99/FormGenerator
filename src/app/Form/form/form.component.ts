import { not } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoustomInputComponent } from 'src/app/coustomInput/coustom-input/coustom-input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ErroListChange: EventEmitter<any> = new EventEmitter<any>();
  submitEvents: EventEmitter<any> = new EventEmitter<any>();

  @Output() GetformResult: EventEmitter<any> = new EventEmitter<any>();

  FieldsStates: Array<FieldsState> = new Array<FieldsState>();

  Fields: Field[] = [
    {

      "fieldId": 1,
      "fieldParentId": undefined,
      "fieldName": "title",
      "fieldTitle": "عنوان",
      "fieldRowId": 1,
      "fieldColId": 1,
      "fieldRejex": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "fieldRejexmessage": "این فیلد نامعتبر است",
      "isRequierd": false,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.steing,
      "defulteValue": "string"
    }
    , {
      "fieldName": "count1",
      "fieldId": 2,
      "fieldParentId": 1,
      "fieldTitle": "تعداد",
      "fieldRowId": 2,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.steing,
      "defulteValue": "string"
    }
    , {
      "fieldName": "select1",
      "fieldId": 3,
      "fieldParentId": undefined,
      "fieldTitle": "آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "defulteValue": "string"
    }, {
      "fieldName": "select2",
      "fieldId": 4,
      "fieldParentId": 3,
      "fieldTitle": "2آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "fieldRequestType": fieldRequestTypeEnum.RequestwhenParentSelect,
      "defulteValue": "string"
    }, {
      "fieldName": "select3",
      "fieldId": 5,
      "fieldParentId": 4,
      "fieldTitle": "3آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "fieldRequestType": fieldRequestTypeEnum.RequestwhenParentSelect,
      "defulteValue": "string"
    }, {
      "fieldName": "select4",
      "fieldId": 6,
      "fieldParentId": 5,
      "fieldTitle": "4آیتم ها",
      "fieldRowId": 3,
      "fieldColId": 1,
      "fieldRejex": "",
      "fieldRejexmessage": "",
      "isRequierd": true,
      "isRequierdMessage": "اجباری است",
      "fieldType": fieldTypeEnum.SelectInput,
      "fieldRequestType": fieldRequestTypeEnum.RequestwhenParentSelect,
      "defulteValue": "string"
    }
  ];


  ngOnInit(): void {
    this.Fields.forEach(element => {
      let Events = new EventEmitter<number[]>();
      element.onChange = Events;
      element.onErrorChenge = this.ErroListChange;
      this.Fields.filter(x => x.fieldParentId == element.fieldId).forEach(e => {
        e.ParentOnChange = Events;
      });

    });

    this.submitEvents.subscribe(x => {
      this.submit();
    });

    this.ErroListChange.subscribe((x: FieldsState) => {
      this.changeErrorListState(x);
    });

  }
  submit() {
    console.log(this.FieldsStates)
    if (this.FieldsStates.filter(x => x.Error == true).length != 0) {
      alert("cheak Error");
    } else {
      let result: any[] = [];


      var data = this.FieldsStates.forEach(x => {
        result.push({ 'name' :this.Fields.find(y => y.fieldId == x.fieldId)?.fieldName,'value':  x.value})
      });
 
      this.GetformResult.emit(result);
    }

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

  changeErrorListState(FieldState: FieldsState) {

    let index = this.FieldsStates.findIndex(x => x.fieldId == FieldState.fieldId);

    if (index == -1) {
      this.FieldsStates.push(FieldState)
    } else {
      this.FieldsStates[index].Error = FieldState.Error;
      this.FieldsStates[index].value = FieldState.value;
    }
  }

}


export interface Field {
  fieldName: string,
  fieldId: number,

  fieldParentId?: number,
  fieldRequestUrl?: string,
  fieldRequestType?: fieldRequestTypeEnum,

  fieldTitle: string,
  fieldRowId: number,
  fieldColId: number,
  fieldRejex: string | RegExp,
  fieldRejexmessage: string,
  isRequierd: boolean,
  isRequierdMessage: string,
  fieldType: fieldTypeEnum,
  defulteValue: any,
  onChange?: EventEmitter<number[]>,
  ParentOnChange?: EventEmitter<number[]>,
  onErrorChenge?: EventEmitter<FieldsState>
}

export interface FieldsState {
  value: any,
  fieldId: number,
  Error: boolean,
};

export interface SelectItem {
  value: number,
  text: string
}


export enum fieldRequestTypeEnum {
  NotRequest,
  RequestWhenLoad,
  RequestwhenParentSelect,
  InitialazeDefultValue
}

export enum fieldTypeEnum {
  steing,
  int,
  SelectInput
}