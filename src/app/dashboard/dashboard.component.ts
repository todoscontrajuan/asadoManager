import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  email: string;
  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router
  ) { }

  ngOnInit() {
    this._fireAuth.user.subscribe(user => {
      this.email = user.email;
    })
  }

  logOut = () => {
    this._fireAuth.auth.signOut()
    .then(() => {
      sessionStorage.clear();
      this._router.navigate(['/login']);
    });
  }

}
