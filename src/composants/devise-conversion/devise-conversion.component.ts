import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeviseService } from '../../services/devise.service';
import { TauxService } from '../../services/taux.service';
import { v4 as uuidv4 } from 'uuid'; 

@Component({
  selector: 'app-devise-conversion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './devise-conversion.component.html',
  styleUrls: ['./devise-conversion.component.scss']
})
export class DeviseConversionComponent {
  base: string = 'GNF';
  cible: string = 'USD';
  montant: number = 0;
  resultat: number | null = null;

  // Injection de dépendance explicite pour TauxService
  private tauxService = inject(TauxService);

  // Injection de dépendance explicite pour DeviseService
  private deviseService = inject(DeviseService);

  effectuerConversion() {
    this.tauxService.getTauxDeChange(this.base, this.cible, this.montant).subscribe(response => {
      // Vérifiez que la réponse contient bien le champ conversion_result
      if (response && response.conversion_result) {
        // Convertissez en nombre si nécessaire
        this.resultat = parseFloat(response.conversion_result);

        // Enregistrer la conversion dans l'historique
        this.deviseService.enregistrerConversion({
          id: uuidv4(),
          base: this.base,
          cible: this.cible,
          montantBase: this.montant,
          montantConverti: this.resultat, // Assurez-vous que c'est un nombre
          date: new Date()
        }).subscribe();
      } else {
        console.error('Erreur : la réponse de l\'API ne contient pas le champ conversion_result');
      }
    }, error => {
      console.error('Erreur lors de la récupération du taux de change', error);
    });
  }

  annulerConversion() {

    this.base = 'GNF';
    this.cible = 'USD';
    this.montant = 0;
    this.resultat = null;
  }
}