import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietaire } from '../model/proprietaire';

const URL="http://localhost:8088/proprietaire"
@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  constructor(private http: HttpClient) { }

  getProprietaires():Observable<Proprietaire[]>{
    return this.http.get<Proprietaire[]>(`${URL}`);
  }

  addProprietaire(pro: Proprietaire):Observable<Proprietaire>{
    return this.http.post<Proprietaire>(`${URL}/createProprietaire`,pro);
  }

  deleteProprietaire(id:number):Observable<void>{
    return this.http.delete<void>(`${URL}/deleteProprietaire/${id}`);
  }

  updateProprietaire(id:number,pro:Proprietaire):Observable<Proprietaire>{
    return this.http.put<Proprietaire>(`${URL}/modifieProprietaire/`+id,pro);
  }

  getProprietaireById(id:number):Observable<Proprietaire>{
    return this.http.get<Proprietaire>(`${URL}/afficheProprietaire/`+id);
  }

}
