import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asado-item',
  templateUrl: './asado-item.component.html',
  styleUrls: ['./asado-item.component.scss']
})
export class AsadoItemComponent implements OnInit {

	@Input() asado;
	@Output() navigateDetails = new EventEmitter();

	constructor() { }

  	ngOnInit() {
  	}

	goToDetails(asado) {
		this.navigateDetails.emit(asado);
	}

}
