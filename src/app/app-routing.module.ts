import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OfficesComponent} from './offices/offices.component';
import { TrackingComponent } from './tracking/tracking.component';


const routes: Routes = 
[
  {path: '' , redirectTo: 'home', pathMatch:'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'offices' , component: OfficesComponent},
  {path: 'tracking' , component: TrackingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
