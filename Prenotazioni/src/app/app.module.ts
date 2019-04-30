import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InserimentoComponent } from './inserimento/inserimento.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ListaComponent } from './lista/lista.component';

import {MatDatepickerModule,MatNativeDateModule} from '@angular/material/';

import {MatListModule} from '@angular/material/list';
import { DettaglioComponent } from './dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    InserimentoComponent,
    ListaComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatCardModule,
    FormsModule, ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
