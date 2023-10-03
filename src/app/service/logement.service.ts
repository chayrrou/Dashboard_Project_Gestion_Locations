import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logement } from '../model/logement';

const URL="http://localhost:8088/logement"
@Injectable({
  providedIn: 'root'
})
export class LogementService {

  constructor(private http: HttpClient) { }

  getLogements():Observable<Logement[]>{
    return this.http.get<Logement[]>(`${URL}/afficheLogement`);
  }

  deleteLogement(id:number):Observable<void>{
    return this.http.delete<void>(`${URL}/deleteLogement/${id}`);
  }

  addLogement(log:Logement):Observable<Logement>{
    return this.http.post<Logement>(`${URL}/createLogement`,log);
  }

  getLogementById(id:number):Observable<Logement>{
    return this.http.get<Logement>(`${URL}/afficheLogement/`+id);
  }

  updateLogement(id:number,log:Logement):Observable<Logement>{
    return this.http.put<Logement>(`${URL}/modifieLogement/`+id,log);
  }
}
