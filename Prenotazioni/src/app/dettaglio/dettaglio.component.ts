import { Component, OnInit, Input} from '@angular/core';

import { Appuntamento } from '../appuntamento/appuntamento';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  @Input() dettagli: Appuntamento;

  constructor() { }

  ngOnInit() {
  }

}
