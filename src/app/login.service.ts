import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http :HttpClient) { }
  public loginForm(log : Login):Observable<any>{
    return this._http.post("http://localhost:9004/auth/authenticate",log);
  }
  
}
