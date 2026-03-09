import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Assurez-vous que le chemin est correct
import { HeaderRoutingModule } from '../header-routing/header-routing.module';

@NgModule({
  declarations: [
     // Déclarez AppComponent ici
  ],
  imports: [
    BrowserModule,
    HeaderRoutingModule,
  ],
})
export class AppModule {}