import { Component, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
 // encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FormGenerator';
  formValue!: any[];

  constructor(private http: HttpClient) { }





  ngOnInit(): void {

  }

  setFormValue(data: any) {
    this.formValue = (data);
  }




}

