import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mascotas } from '../model/mascotas';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotasServices {

  private baseUrl = 'http://localhost:8080/api/mascotas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Mascota Funcionando');
  }


  getMascotas(): Observable<Mascotas[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Mascotas[])
    );
  }

  getMascota(id: number): Observable<Mascotas> {
    return this.http.get<Mascotas>(`${this.baseUrl}/${id}`);
  }


  createMascotas(mascotas: Mascotas): Observable<Mascotas> {
    return this.http.post<Mascotas>(this.baseUrl, mascotas, {headers: this.httpHeaders});
  }

  updateMascotas(mascotas: Mascotas): Observable<Mascotas> {
    return this.http.put<Mascotas>(this.baseUrl, mascotas, {headers: this.httpHeaders});
  }

  deleteMascotas(id: number): Observable<Mascotas> {
    return this.http.delete<Mascotas>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}
