import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Coccion } from '../models/Coccion';

@Injectable({
  providedIn: 'root'
})
export class CoccionService {
  private urlEndPoint:string='http://localhost:8082/pasteleria/cocciones/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getCocciones():Observable<Coccion[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Coccion[])
    );
  }

  createCoc(coccion:Coccion):Observable<Coccion>{
    return this.http.post<Coccion>(this.urlEndPoint, 
      coccion,{headers:this.header});
  }

  deleteCoc(codigoHor:number):Observable<Coccion>{
    return this.http.delete<Coccion>(this.urlEndPoint+codigoHor.toString(),{headers:this.header});
  }
}
