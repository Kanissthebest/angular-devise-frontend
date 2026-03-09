import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DeviseConversionComponent } from '../composants/devise-conversion/devise-conversion.component';
import { HeaderComponent } from '../composants/header/header.component';
import { HistoriqueConversionComponent } from "../composants/historique-conversion/historique-conversion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeviseConversionComponent, HeaderComponent, HistoriqueConversionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-devise';
}
