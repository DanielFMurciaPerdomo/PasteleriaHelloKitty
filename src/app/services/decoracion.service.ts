import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Decoracion } from '../models/Decoracion';

@Injectable({
  providedIn: 'root'
})
export class DecoracionService {

  private urlEndPoint:string='http://localhost:8082/pasteleria/decoraciones/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getDecoraciones():Observable<Decoracion[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Decoracion[])
    );
  }

  createDecor(decoracion:Decoracion):Observable<Decoracion>{
    return this.http.post<Decoracion>(this.urlEndPoint, 
      decoracion,{headers:this.header});
  }

  deleteDecor(codigoDecor:number):Observable<Decoracion>{
    return this.http.delete<Decoracion>(this.urlEndPoint+codigoDecor.toString(),{headers:this.header});
  }
}
