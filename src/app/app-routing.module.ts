import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HandbookComponent } from './handbook/handbook.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'handbook', component: HandbookComponent },
], {
    initialNavigation: 'enabled'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
