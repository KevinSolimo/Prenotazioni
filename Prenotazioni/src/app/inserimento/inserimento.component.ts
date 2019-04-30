import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css']
})
export class InserimentoComponent implements OnInit {

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  data: Object;
  loading: boolean;
  postArt: Observable<Object>;
  num: number = 0;

   makeCompactPost(nome: HTMLInputElement,cognome: HTMLInputElement,indirizzo: HTMLInputElement,
   telefono: HTMLInputElement, email: HTMLInputElement,
   data: HTMLInputElement, ora: HTMLInputElement): void {
    this.loading = true;
    this.http
    .post('https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni',
      JSON.stringify({
        nome: nome.value,
        cognome: cognome.value,
        indirizzo: indirizzo.value,
        telefono: telefono.value,
        email: email.value,
        data: data.value,
        ora: ora.value,
      })
    )
    .subscribe(data => {
      console.log(data)
    });
  }


}
