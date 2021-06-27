import { TodoCComponent } from './components/todo-c/todo-c.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MetsComponent } from './mets/mets.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCComponent,
    MetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,MatFormFieldModule, BrowserAnimationsModule,
    MatInputModule,MatButtonModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
