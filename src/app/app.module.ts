import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './ejercicio-dos/ejercicio-dos.component';
import { EjercicioTresComponent } from './ejercicio-tres/ejercicio-tres.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxFileDragDropModule } from 'ngx-file-drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    EjercicioUnoComponent,
    EjercicioDosComponent,
    EjercicioTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
