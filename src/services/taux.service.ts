import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TauxService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://v6.exchangerate-api.com/v6';

  constructor(private http: HttpClient) {}

  getTauxDeChange(base: string, cible: string, montant: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.apiKey}/pair/${base}/${cible}/${montant}`);
  }
}