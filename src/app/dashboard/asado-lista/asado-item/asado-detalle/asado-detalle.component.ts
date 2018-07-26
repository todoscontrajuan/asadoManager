import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-asado-detalle',
  templateUrl: './asado-detalle.component.html',
  styleUrls: ['./asado-detalle.component.scss']
})
export class AsadoDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(id => console.log(id));
  }

  ngOnInit() {
  }

}
