import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitant } from '../model/habitant';

const URL="http://localhost:8088/habitant"

@Injectable({
  providedIn: 'root'
})
export class HabitantService {

  
  constructor(private http: HttpClient) { }
  
  getHabitants():Observable<Habitant[]>{
    return this.http.get<Habitant[]>(`${URL}`);
  }

  addHabitant(hab: Habitant):Observable<Habitant>{
    return this.http.post<Habitant>(`${URL}/createHabitant`,hab);
  }

  deleteHabitant(id:number):Observable<void>{
    return this.http.delete<void>(`${URL}/deleteHabitant/${id}`);
  }

  updateHabitant(id:number,hab:Habitant):Observable<Habitant>{
    return this.http.put<Habitant>(`${URL}/modifieHabitant/`+id,hab);
  }

  getHabitantById(id:number):Observable<Habitant>{
    return this.http.get<Habitant>(`${URL}/afficheHabitant/`+id);
  }

}
