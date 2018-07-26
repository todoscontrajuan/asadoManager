import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore} from 'angularfire2/firestore'
import { Router } from '@angular/router';

export interface Asado {
  id: string;
  name: string;
  date: Date;
  attendees: number;
  price: number;
}

@Component({
  selector: 'app-add-asado',
  templateUrl: './add-asado.component.html',
  styleUrls: ['./add-asado.component.scss']
})
export class AddAsadoComponent implements OnInit {
  asado: Asado = {id: '', name: '', date: null, attendees: 0, price: 0}
  constructor(private _store:AngularFirestore, private _router: Router) { }

  ngOnInit() {
  }

  addAsado = (form: NgForm) => {
    this.asado.id = this._store.createId();
    this._store.collection('asados').add(this.asado)
      .then(() => {
        form.reset();
        alert('Asado added!');
        this._router.navigate(['/dashboard']);
      })
      .catch(err => console.error(err))
  }

}
