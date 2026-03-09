import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviseService } from '../../services/devise.service';
import { Devise } from '../../modeles/devise.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-historique-conversion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique-conversion.component.html',
  styleUrl: './historique-conversion.component.scss'
})
export class HistoriqueConversionComponent implements OnInit, OnDestroy {
  conversions: Devise[] = [];
  private deviseService = inject(DeviseService);
  private destroy$ = new Subject<void>(); // Subject pour gérer la destruction

  ngOnInit(): void {
    this.chargerHistorique();
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // Émettre pour arrêter les abonnements
    this.destroy$.complete();
  }

  chargerHistorique(): void {
    this.deviseService.getHistoriqueConversions()
      .pipe(takeUntil(this.destroy$)) // Arrêter l'abonnement à la destruction
      .subscribe(
        (data) => {
          this.conversions = data;
        },
        (error) => {
          console.error('Erreur lors du chargement de l\'historique', error);
        }
      );
  }

  supprimerConversion(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette conversion ?')) {
      this.deviseService.supprimerConversion(id)
        .pipe(takeUntil(this.destroy$)) // Même chose ici
        .subscribe(
          () => {
            this.chargerHistorique();
          },
          (error) => {
            console.error('Erreur lors de la suppression de la conversion', error);
          }
        );
    }
  }
}