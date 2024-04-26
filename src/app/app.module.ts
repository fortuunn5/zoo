import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { HotelListComponent } from './component/hotel-list/hotel-list.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { CreateVisitComponent } from './component/create-visit/create-visit.component';


import { NgSelectModule } from "@ng-select/ng-select"; 
import { FormsModule } from '@angular/forms';
import { PetListComponent } from './component/pet-list/pet-list.component';
import { CommonModule, NgIf } from '@angular/common';
import { CreateOrUpdatePetComponent } from './component/create-or-update-pet/create-or-update-pet.component';
import { CreateOrUpdateServiceComponent } from './component/create-or-update-service/create-or-update-service.component';
import { VisitListComponent } from './component/visit-list/visit-list.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { CreateOrUpdateHotelComponent } from './component/create-or-update-hotel/create-or-update-hotel.component';
import { PersonalAccountComponent } from './component/personal-account/personal-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotelTableComponent } from './component/hotel-table/hotel-table.component';
import { ServiceTableComponent } from './component/service-table/service-table.component';
import { VisitTableComponent } from './component/visit-table/visit-table.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import { PetTableComponent } from './component/pet-table/pet-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelListComponent,
    ServiceListComponent,
    CreateVisitComponent,
    PetListComponent,
    CreateOrUpdatePetComponent,
    CreateOrUpdateServiceComponent,
    VisitListComponent,
    CreateOrUpdateHotelComponent,
    PersonalAccountComponent,
    HotelTableComponent,
    ServiceTableComponent,
    VisitTableComponent,
    UserTableComponent,
    PetTableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    NgIf,
    DpDatePickerModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
