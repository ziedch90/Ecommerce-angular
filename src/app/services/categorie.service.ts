import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categories} from '../models/categories';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  baseurl="http://localhost:3001/api/categories";
  constructor(private http:HttpClient) { }
  ListCategories():Observable<Categories[]>
 {
 return this.http.get<Categories[]>(this.baseurl);
 }
 Deletecategorie(id:object):Observable<Categories>
  {return this.http.delete<Categories>(this.baseurl + '/' + id);}

 Addcategorie(cat:Categories):Observable<Categories>
 {
   console.log(cat);
 
   return this.http.post<Categories>(this.baseurl, cat)
 }
 getcategorie(id:object):Observable<Categories>
 {return this.http.get<Categories>(this.baseurl + '/' + id);}

 UpdateCategorie(cat:Categories,id:object): Observable<Categories>
{
return this.http.put<Categories>(this.baseurl + '/' + id, cat);
}
}
