import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent {
  title = 'FormGenerator';
  formValue!:any[] ;

setFormValue(data:any){
  this.formValue =(data);
}

}
