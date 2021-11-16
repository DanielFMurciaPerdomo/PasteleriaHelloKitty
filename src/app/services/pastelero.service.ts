import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Pastelero } from '../models/Pastelero';
@Injectable({
  providedIn: 'root'
})
export class PasteleroService {
  private urlEndPoint:string='http://localhost:8082/pasteleria/pasteleros/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getPasteleros():Observable<Pastelero[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Pastelero[])
    );
  }

  create(pastelero:Pastelero):Observable<Pastelero>{
    return this.http.post<Pastelero>(this.urlEndPoint, 
      pastelero,{headers:this.header});
  }

  delete(codigoPast:number):Observable<Pastelero>{
    return this.http.delete<Pastelero>(this.urlEndPoint+codigoPast.toString(),{headers:this.header});
  }
}
