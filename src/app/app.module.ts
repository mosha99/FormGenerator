import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './Form/form/form.component';
import { CoustomInputComponent } from './coustomInput/coustom-input/coustom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CoustomInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
