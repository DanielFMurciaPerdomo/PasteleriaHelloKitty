import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  private urlEndPoint:string='http://localhost:8082/pasteleria/personas/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getPersonas():Observable<Persona[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Persona[])
    );
  }

  createPer(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.urlEndPoint, 
      persona,{headers:this.header});
  }

  deletePer(codigoPer:number):Observable<Persona>{
    return this.http.delete<Persona>(this.urlEndPoint+codigoPer.toString(),{headers:this.header});
  }
}
