import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicamentos } from '../model/medicamentos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosServices {

  private baseUrl = 'http://localhost:8080/api/medicamentos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Medicamentos Funcionando');
  }


  getMedicamentos(): Observable<Medicamentos[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Medicamentos[])
    );
  }

  getMedicamento(id: number): Observable<Medicamentos> {
    return this.http.get<Medicamentos>(`${this.baseUrl}/${id}`);
  }


  createMedicamentos(medicamentos: Medicamentos): Observable<Medicamentos> {
    return this.http.post<Medicamentos>(this.baseUrl, medicamentos, {headers: this.httpHeaders});
  }

  updateMedicamentos(medicamentos: Medicamentos): Observable<Medicamentos> {
    return this.http.put<Medicamentos>(this.baseUrl, medicamentos, {headers: this.httpHeaders});
  }

  deleteMedicamentos(id: number): Observable<Medicamentos> {
    return this.http.delete<Medicamentos>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}

