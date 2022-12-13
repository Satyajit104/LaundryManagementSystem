import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {path:'signup', component:SignupComponent },
  {path: '',redirectTo: 'signup', pathMatch:'full'},
  {path:'login', component:LoginComponent },
  {path:'dashboard', component:DashboardComponent },
  {path:'request', component: RequestComponent },
  {path:'userRequest', component: RequestStatusComponent },
  {path:'forgotPassword', component: ForgotPasswordComponent }

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
