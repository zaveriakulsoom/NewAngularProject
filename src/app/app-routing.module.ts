import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdhocRefillComponent } from './adhoc-refill/adhoc-refill.component';
import { AvailiblityComponent } from './availiblity/availiblity.component';
import { DrugdetailsComponent } from './drugdetails/drugdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RefillDuesDateComponent } from './refill-dues-date/refill-dues-date.component';
import { RefillStatusComponent } from './refill-status/refill-status.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriptionStatusComponent } from './subscription-status/subscription-status.component';
import { ViewDrugComponent } from './view-drug/view-drug.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path:'refill-due-date',component:RefillDuesDateComponent},

  //{path: 'logout', component: LogoutComponent},
  
  {path:'adhoc-refill',component:AdhocRefillComponent},
  {path: 'home', component: HomeComponent},
  //{path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'refill-dues-date', component: RefillDuesDateComponent},
  {path: 'refill-status', component: RefillStatusComponent},
  {path: 'search-drug', component: SearchDrugComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path: 'subscription-status', component: SubscriptionStatusComponent},
  {path: 'view-drug', component: ViewDrugComponent},
  {path: 'availiblity', component: AvailiblityComponent},
  {path: 'drugdetails', component: DrugdetailsComponent},
  {path: 'main-page', component: MainPageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
