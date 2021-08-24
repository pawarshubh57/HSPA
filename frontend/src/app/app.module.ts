import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card-component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import {Routes, RouterModule} from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes : Routes = [
  {path: "", component: PropertyListComponent},
  {path:"rent-property", component: PropertyListComponent},
  {path:"add-property", component: AddPropertyComponent},
  {path:"property-detail/:id", component: PropertyDetailComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes), // forRoot() method creates an NgModule that contains all the directives, the given routes, and the Router service itself.
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
