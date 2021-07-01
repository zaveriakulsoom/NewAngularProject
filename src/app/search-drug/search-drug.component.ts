import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class DrugDetails {
  
  drugId : number=0;
  public name: string='';
  public manufacturer: string='';
  public manufacturedDate !: Date;
  public expiryDate!: Date;
  public quantity: number=0;

}


@Component({
  selector: 'app-search-drug',
  templateUrl: './search-drug.component.html',
  styleUrls: ['./search-drug.component.css']
})
export class SearchDrugComponent implements OnInit {

  friends:DrugDetails=new DrugDetails();
  drugId1 : string='';
  constructor(
   private httpClient : HttpClient, 
  ) { 

  }


  ngOnInit(): void {
    this.getDrugDetailsById();
  }

  getDrugDetailsById(){
    this.httpClient.get<any>(`http://localhost:9001/drug/searchDrugsByID/${this.drugId1}`).subscribe(
      response => {
        
        this.friends = response;
        console.log(this.friends);
      }
    );
  }

}
