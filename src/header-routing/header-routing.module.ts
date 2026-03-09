import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviseConversionComponent } from '../composants/devise-conversion/devise-conversion.component';
import { HistoriqueConversionComponent } from '../composants/historique-conversion/historique-conversion.component';

// Définir les routes
const routes: Routes = [
  { path: 'convertir', component: DeviseConversionComponent },
  { path: 'historique', component: HistoriqueConversionComponent },
  { path: '', redirectTo: '/convertir', pathMatch: 'full' } // Route par défaut
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule {}