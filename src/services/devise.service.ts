import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devise } from '../modeles/devise.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Enregistrer une conversion
  enregistrerConversion(conversion: Devise): Observable<Devise> {
    return this.http.post<Devise>(this.apiUrl, conversion);
  }

  // Afficher la liste des conversions
  getHistoriqueConversions(): Observable<Devise[]> {
    return this.http.get<Devise[]>(this.apiUrl);
  }

  // Afficher les détails d'une conversion
  getConversionDetail(id: number): Observable<Devise> {
    return this.http.get<Devise>(`${this.apiUrl}/${id}`);
  }

  // Supprimer une conversion
  supprimerConversion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}