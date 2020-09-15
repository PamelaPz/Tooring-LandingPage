import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiceHomeComponent } from './components/servicios/service-home/service-home.component';
import { ServiceSoftwareComponent } from './components/servicios/service-software/service-software.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent, children: 
    [ 
      { path: 'web', component: ServiceHomeComponent },
      { path: 'software', component: ServiceSoftwareComponent },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
