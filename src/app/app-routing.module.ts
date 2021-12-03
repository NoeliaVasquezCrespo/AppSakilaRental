import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddressComponent } from './components/address/address.component';
import { MoviescartComponent } from './components/moviescart/moviescart.component';
import { DetailsComponent } from './components/details/details.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'store/:id', component: StoreComponent},
  {path: 'payment',component:PaymentComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'address', component:AddressComponent},
  {path:'cart',component:MoviescartComponent},
  {path: 'film/details/:id', component: DetailsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
