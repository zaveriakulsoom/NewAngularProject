import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrugLocationService } from '../drug-location.service';
import { DrugDetails } from '../search-drug/search-drug.component';
import { ViewDrug } from '../view-drug';

@Component({
  selector: 'app-view-drug',
  templateUrl: './view-drug.component.html',
  styleUrls: ['./view-drug.component.css']
})
export class ViewDrugComponent implements OnInit {
  viewdrug=new ViewDrug();

  constructor(private _service: DrugLocationService, private _route: Router,

    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewdrugavaliblity(){

    this._service.drugDetails(this.viewdrug).subscribe(

      (data: ViewDrug[]) => {
        console.log("response received");

        console.log(data);

       this._route.navigate(['/view-drug'], {

          skipLocationChange: true,

          queryParams: {

            data: JSON.stringify(data)

          }

        });



      },

      error => {

        console.log("Bad credentials");

       

      }

    )



  }
}

