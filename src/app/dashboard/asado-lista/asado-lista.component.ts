import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore'

@Component({
  selector: 'app-asado-lista',
  templateUrl: './asado-lista.component.html',
  styleUrls: ['./asado-lista.component.scss']
})
export class AsadoListaComponent implements OnInit {
	asados = []

  constructor(private _store: AngularFirestore) { }

  ngOnInit() {
    this._store.collection('asados').valueChanges().subscribe(asados => this.asados = asados);
  }

}
