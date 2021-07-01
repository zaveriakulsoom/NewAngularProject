import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewDrug } from './view-drug';

@Injectable({
  providedIn: 'root'
})
export class ViewDrugService {

  constructor(private _http :HttpClient) { }
  public viewdrug(viewdrug:ViewDrug):Observable<any>{
    return this._http.get<ViewDrug>("http://localhost:9005/portal/getAllDrugs/");
  }
}
