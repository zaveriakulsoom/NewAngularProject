import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drugdetails',
  templateUrl: './drugdetails.component.html',
  styleUrls: ['./drugdetails.component.css']
})
export class DrugdetailsComponent implements OnInit {
res:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      result =>{
      this.res = JSON.parse(result.data);
       console.log(JSON.parse(result.data));
      })
  }

}
