import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StationsComponent } from './stations/stations.component';

const routes: Routes = [
 {path: "dashboard", component: StationsComponent},
 {path: '',   redirectTo: 'login', pathMatch: 'full' },
 { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
