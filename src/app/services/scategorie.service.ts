import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scategorie } from '../models/scategorie';
@Injectable({
  providedIn: 'root'
})
export class ScategorieService {
  baseurl="http://localhost:3001/api/scategories";
  constructor(private http:HttpClient){}
  getscategorie():Observable<Scategorie[]>{
    return this.http.get<Scategorie[]>(this.baseurl)
  }
  Deletescategorie(id:object):Observable<Scategorie>
  {return this.http.delete<Scategorie>(this.baseurl + '/' + id);}
  Addscategorie(scat : Scategorie):Observable<Scategorie>
  {
    console.log(scat);
  
    return this.http.post<Scategorie>(this.baseurl, scat)
  }
  
}
  

