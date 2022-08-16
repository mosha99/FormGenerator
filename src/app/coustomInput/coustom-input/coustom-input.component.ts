import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feild, fieldTypeEnum } from 'src/app/Form/form/form.component';


@Component({
  selector: 'app-coustom-input',
  templateUrl: './coustom-input.component.html',
  styleUrls: ['./coustom-input.component.css']
})
export class CoustomInputComponent implements OnInit {

  @Input() FeildInfo?: Feild;
  @Input() Value: string = '';


  ngOnInit(): void {
    this.FeildInfo?.ParentOnchenge?.subscribe((v: any) => {
      this.Value = v[0];
      this.OnCheange(v[0]) 
    });
  }

  OnCheange(event: number) {
    this.FeildInfo?.onchenge?.emit([event]);
  }

  getfieldTypeEnum() {
    return fieldTypeEnum;
  }
}

