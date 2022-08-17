import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field, FieldsError, fieldTypeEnum } from 'src/app/Form/form/form.component';


@Component({
  selector: 'app-coustom-input',
  templateUrl: './coustom-input.component.html',
  styleUrls: ['./coustom-input.component.css',]

})
export class CoustomInputComponent implements OnInit {

  @Input() FieldInfo!: Field;
  @Input() Value!: string;

  Message?: string;
  chenge: boolean = false;
  error: boolean = false;
  validClass!: string;

  ngOnInit(): void {
    this.Value = this.Value;
    this.FieldInfo?.ParentOnChange?.subscribe((v: any) => {
      this.Value = v[0];
      this.OnCheange(v[0])
    });
    this.GetErrorState();

  }

  OnCheange(event: number) {
    this.chenge = true;
    this.FieldInfo?.onChange?.emit([event]);
  }
  getfieldTypeEnum() {
    return fieldTypeEnum;
  }

  GetErrorState() {
    let isValid: boolean = this.Error();
    if (this.error == !isValid) { }
    else {
      this.error = !isValid;
      let ErrorState: FieldsError = {
        Error: !isValid,
        fieldId: this.FieldInfo.fieldId,
      }
      this.FieldInfo.onErrorChenge?.emit(ErrorState)
    }
    isValid = this.chenge && !isValid;
    this.validClass = isValid ? "is-invalid":"";
    return isValid;
  }

  Error(): boolean {
    let valid: boolean = (this.RegExpValidator() && this.RequyerdValidator());
    return valid;
  }

  RegExpValidator(): boolean {
    if (this.FieldInfo.fieldRejex == undefined) return true;
    let validator: RegExp = new RegExp(this.FieldInfo.fieldRejex)
    let isvalid = validator.test(this.Value)
    this.Message = undefined;
    if (!isvalid) {
      this.Message = this.FieldInfo.fieldRejexmessage;
    }
    return isvalid;
  }
  RequyerdValidator(): boolean {
    let isvalid = (!(this.FieldInfo?.isRequierd ?? false) || (this.Value != '' && this.Value != undefined));
    if (!isvalid) this.Message = "is Requierd";
    this.Message = undefined;
    if (!isvalid) {
      this.Message = this.FieldInfo.isRequierdMessage;
    }
    return isvalid;
  }
}

