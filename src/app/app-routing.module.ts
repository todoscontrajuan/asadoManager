import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsadoDetalleComponent } from './dashboard/asado-lista/asado-item/asado-detalle/asado-detalle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard} from './auth.guard';
import { AddAsadoComponent } from './dashboard/add-asado/add-asado.component';

const routes: Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'detail/:id', component: AsadoDetalleComponent, canActivate: [ AuthGuard ] },
	{ path: 'register', component: RegisterComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
	{ path: 'login', component: LoginComponent },
	{ path: 'addasado', component: AddAsadoComponent }
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
