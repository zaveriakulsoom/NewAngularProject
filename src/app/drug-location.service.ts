import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugLocation } from './drug-location';
import { DrugDetails } from './search-drug/search-drug.component';

@Injectable({
  providedIn: 'root'
})
export class DrugLocationService {

  constructor(private _http :HttpClient) { }

  public drugDetails(drugLocation:DrugDetails):Observable<any>{
    return this._http.get<DrugDetails>("http://localhost:9009/drug/searchDrugsByID/"+drugLocation.drugId);
  }
  
}
