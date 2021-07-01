import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrugLocation } from '../drug-location';
import { DrugLocationService } from '../drug-location.service';
import { DrugDetails } from '../search-drug/search-drug.component';

@Component({
  selector: 'app-availiblity',
  templateUrl: './availiblity.component.html',
  styleUrls: ['./availiblity.component.css']
})
export class AvailiblityComponent implements OnInit {
drug=new DrugDetails();
  constructor(private _service: DrugLocationService, private _route: Router,

    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
 

  drugavaliblity(){

      this._service.drugDetails(this.drug).subscribe(

        (data: DrugDetails[]) => {
          console.log("response received");

          console.log(data);

         this._route.navigate(['/drugdetails'], {

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
