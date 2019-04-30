import { Component, OnInit } from '@angular/core';

import { Appuntamento } from './../appuntamento/appuntamento';

import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  data: Object;
  o :Observable<Object>;
  oAppuntamento : Observable<Appuntamento[]>;
  appuntamentoData : Appuntamento[];
  dettagli: Appuntamento[];

  constructor(public http: HttpClient) {}

  makeTypedRequestAll() : void{
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oAppuntamento = this.http.get<Appuntamento[]>('https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni');
    this.oAppuntamento.subscribe(data => {
      this.appuntamentoData = data;
    });
  }

  makeTypedRequestOne(id : HTMLInputElement) : void{
    console.log(id.textContent)
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oAppuntamento = this.http.get<Appuntamento[]>('https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni/' + id.textContent);
    this.oAppuntamento.subscribe(data => {
      this.dettagli = data;
    });
  }

  ngOnInit() {
    this.makeTypedRequestAll()
  }

}
