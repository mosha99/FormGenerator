import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Field, FieldsState, fieldTypeEnum, UrlAndData } from 'src/app/Form/form/form.component';


@Component({
  selector: 'app-coustom-input',
  templateUrl: './coustom-input.component.html',
  styleUrls: ['./coustom-input.component.css',]

})
export class CoustomInputComponent implements OnInit {




  @Input() field!: Field;
  Data: any;
  fieldsState?: FieldsState;
  parents: Array<FieldsState> = new Array<FieldsState>();
  ErrorMessage?: string;
  UrlAndData!: UrlAndData;


  ngOnInit(): void {
    this.UrlAndData = { Data: undefined, Url: this.field.fieldRequestUrl ?? '' };
    this.fieldsState = {
      fieldId: this.field.fieldId,
      Error: this.GetvalidationResult(),
      value: undefined
    }
    this.field.Events?.onChange.emit(this.fieldsState);
    this.field.Events?.ParentsChanges?.forEach(e => {
      e.subscribe((data: FieldsState) => {
        let test = this.field;
        let index = this.parents.findIndex(x => x.fieldId == data.fieldId);
        if (index == -1) {
          if (this.parents == undefined) this.parents = new Array<FieldsState>();
          this.parents.push(data);
        } else {

          this.parents[index].value = data.value;
          this.parents[index].Error = data.Error;

          this.Data = undefined;
          this.Datachenge(undefined);
        }
        this.UrlAndData = { Data: this.parents, Url: this.UrlAndData.Url };
      });
    })
  }



  Datachenge(changed: any) {
    this.fieldsState!.value = changed;
    this.fieldsState!.Error = !this.GetvalidationResult();
    this.field.Events?.onChange.emit(this.fieldsState)
  }



  GetvalidationResult(): boolean {
    this.RejexpValidation();
    this.RequierdValidation();
    if(!this.isView()) return true;

    return this.ErrorMessage == undefined;
  }

  RejexpValidation():void {

    if (this.field.fieldRejex == undefined) return ;

    
    let rejex: RegExp = new RegExp(this.field.fieldRejex);
    let Rejvalid: boolean = rejex.test(this.fieldsState?.value)
    if (!Rejvalid)
      this.ErrorMessage = this.field.fieldRejexmessage;
    else
      this.ErrorMessage = undefined;

  }

  RequierdValidation() {
    if (this.field.isRequierd != true) return ;
    let res = this.fieldsState?.value == undefined
    if (res)
      this.ErrorMessage = this.field.isRequierdMessage;
    else
      this.ErrorMessage = undefined;
  }

  isView(): boolean {
    if (this.field.Parents?.stringFunction != undefined) {
      let view: boolean = this.field!.Parents!.isView!(this.parents);
      return view;
    } else {
      return true;
    }
  }
  getfieldTypeEnum() {
    return fieldTypeEnum;
  }
}

