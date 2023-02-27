import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { StationServiceService } from './station-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    LoginComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
