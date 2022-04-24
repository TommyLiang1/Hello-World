import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ImageComponent } from './image/image.component';
import { ButtonComponent } from './button/button.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    ImageComponent,
    ButtonComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
