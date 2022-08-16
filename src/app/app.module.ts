import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './Form/form/form.component';
import { CoustomInputComponent } from './coustomInput/coustom-input/coustom-input.component';
import { TextInputComponent } from './Form/form/FormFeild/text-input/text-input.component';
import { NumbrInputComponent } from './Form/form/FormFeild/numbr-input/numbr-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CoustomInputComponent,
    TextInputComponent,
    NumbrInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
