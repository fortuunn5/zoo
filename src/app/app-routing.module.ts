import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './component/hotel-list/hotel-list.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { CreateVisitComponent } from './component/create-visit/create-visit.component';
import { PetListComponent } from './component/pet-list/pet-list.component';
import { CreateOrUpdatePetComponent } from './component/create-or-update-pet/create-or-update-pet.component';
import { CreateOrUpdateServiceComponent } from './component/create-or-update-service/create-or-update-service.component';
import { VisitListComponent } from './component/visit-list/visit-list.component';
import { CreateOrUpdateHotelComponent } from './component/create-or-update-hotel/create-or-update-hotel.component';
import { PersonalAccountComponent } from './component/personal-account/personal-account.component';
import { HotelTableComponent } from './component/hotel-table/hotel-table.component';

const routes: Routes = [
  {path: 'hotels', component: HotelListComponent},
  {path: 'hotels/:id', component: HotelComponent},
  {path: 'hotels/:id/services', component: ServiceListComponent},
  {path: 'visits/new', component: CreateVisitComponent},
  {path: 'pets', component: PetListComponent},
  {path: 'pets/new', component: CreateOrUpdatePetComponent},
  {path: 'pets/:id/edit', component: CreateOrUpdatePetComponent},
  {path: 'services', component: ServiceListComponent},
  {path: 'services/new', component: CreateOrUpdateServiceComponent},
  {path: 'services/:id/edit', component: CreateOrUpdateServiceComponent},
  {path: 'visits', component: VisitListComponent},
  {path: 'visits/new', component: CreateVisitComponent},
  {path: 'visits/:id/edit', component: CreateVisitComponent},
  {path: 'hotels/new', component: CreateOrUpdateHotelComponent},
  {path: 'hotels/:id/edit', component: CreateOrUpdateHotelComponent},
  {path: 'account', component: PersonalAccountComponent},
  {path: 'z', component: HotelTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
