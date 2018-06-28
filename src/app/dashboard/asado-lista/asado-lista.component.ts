import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asado-lista',
  templateUrl: './asado-lista.component.html',
  styleUrls: ['./asado-lista.component.scss']
})
export class AsadoListaComponent implements OnInit {
	asados = [
		{ name: 'Asado de los pibes' },
    	{ name: 'Asado mundial' },
    	{ name: 'Rapidito' }
	]
	clicked = false;
	asado = {};

  constructor() { }

  ngOnInit() {
  }

  goToDetails(asado) {
  	this.clicked = true;
  	this.asado = asado;
  }

}
