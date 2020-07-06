import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HandbookComponent } from './handbook/handbook.component';
import { MenuComponent } from './fragment/menu/menu.component';
import { FooterComponent } from './fragment/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HandbookComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
