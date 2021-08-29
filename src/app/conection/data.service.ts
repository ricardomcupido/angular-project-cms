import { Injectable } from '@angular/core';
import { data_user, data_user2, data_user3 } from './ModelInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='http://iacenter.victortalamantes.com'
  constructor(private http: HttpClient) { }

  getAllUsers():Observable<data_user[]>{
    return this.http.get<data_user[]>(this.url+"/users");
  }
  updateUsers(cnjson:data_user2):Observable<data_user2>{
    return this.http.put<data_user2>(this.url+"/user", cnjson);
  }
  adduser(cnjson:data_user3):Observable<data_user3>{
    return this.http.post<data_user3>(this.url+"/user", cnjson);
  }
  getUser(iduser:string):Observable<data_user>{
    return this.http.get<data_user>(this.url+"/user/"+iduser);
  }
}
