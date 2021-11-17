import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pastel } from '../models/Pastel';

@Injectable({
  providedIn: 'root'
})
export class PastelService {
  private urlEndPoint:string='http://localhost:8082/pasteleria/pasteles/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getPasteles():Observable<Pastel[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Pastel[])
    );
  }

  createP(pastel:Pastel):Observable<Pastel>{
    return this.http.post<Pastel>(this.urlEndPoint, 
      pastel,{headers:this.header});
  }

  deleteP(codigoP:number):Observable<Pastel>{
    return this.http.delete<Pastel>(this.urlEndPoint+codigoP.toString(),{headers:this.header});
  }
}
