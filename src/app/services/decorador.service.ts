import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Decorador } from '../models/Decorador';

@Injectable({
  providedIn: 'root'
})
export class DecoradorService {

  private urlEndPoint:string='http://localhost:8082/pasteleria/decoradores/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getDecoradores():Observable<Decorador[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Decorador[])
    );
  }

  createDec(decorador:Decorador):Observable<Decorador>{
    return this.http.post<Decorador>(this.urlEndPoint, 
      decorador,{headers:this.header});
  }

  deleteDec(codigoDec:number):Observable<Decorador>{
    return this.http.delete<Decorador>(this.urlEndPoint+codigoDec.toString(),{headers:this.header});
  }
}
