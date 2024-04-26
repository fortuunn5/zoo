import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../service/pet.service';
import { Service } from '../../model/service';
import { ServiceService } from '../../service/service.service';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitService } from '../../service/visit.service';
import { Visit } from '../../model/visit';


@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrl: './create-visit.component.css'
})
export class CreateVisitComponent implements OnInit {
  visit: Visit = new Visit();
 

  pets: Pet[] = [];
  selectedPet!: Pet;

  hotels: Hotel[] = [];
  selectedHotel!: Hotel;

  services: Service[] = [];
  selectedServices: Service[] = [];

  totalPrice!: number;

  selectedArrivalDate!: Date ;
  selectedDepartureDate!: Date;

  animalFostering!: Service;

  constructor(private petService: PetService,
    private hotelService: HotelService,
    private serviceService: ServiceService,
    private activatedRoute: ActivatedRoute,
    private visitService: VisitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);


    if (id) {
      this.visitService.getVisit(id).subscribe(result => {
        this.visit = result;

        debugger
        this.selectHotel(this.visit.hotelDto);
        this.totalPrice = this.visit.totalPrice;
        this.petService.getPetsByUser(this.visit.petDto.user.id).subscribe(result => {this.pets = result});
        this.selectPet(this.visit.petDto);
        this.selectedArrivalDate = this.visit.arrivalDate;
        this.selectedDepartureDate = this.visit.departureDate;
        this.selectedServices = this.visit.services;
        debugger
      });
      //this.selectedType = this.pet.type;
    }
    else{
      this.petService.getPets().subscribe(result => { this.pets = result });
    }
    debugger
    this.hotelService.getHotels().subscribe(result => { this.hotels = result });
    //this.selectedHotel = this.hotels[0];
    
    this.serviceService.getServiceByName('Передержка').subscribe(result => { this.animalFostering = result });
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }

  selectHotel(hotel: Hotel) {
    this.selectedHotel = hotel;
    this.services = hotel.services;
    // debugger
    // window.location.reload();
    //this.serviceService.getServicesByHotel(hotel.id).subscribe(result => { this.services = result })
  }
  getSelectedHotelServices(): Service[] {
    if (this.selectedHotel && this.selectedHotel.services) {
      return this.selectedHotel.services;
    }
    return [];
  }

  getTotalPrice(): number {
    const tp = this.selectedServices.map(x => x.price).reduce((partialSum, a) => partialSum + a, 0);
    const hz = this.animalFostering.price * this.getDaysCount();
    return tp + hz;
    //this.totalPrice = this.selectedServices.map(x => x.price).reduce((partialSum, a) => partialSum + a, 0);
    //return this.selectedServices.map(x => x.price).reduce((partialSum, a) => partialSum + a, 0);
  }

  getDaysCount(): number {
    //debugger
    const differenceInMs: number = new Date(this.selectedDepartureDate).getTime() - new Date(this.selectedArrivalDate).getTime();
    //Math.abs(this.selectedDepartureDate.getTime() - this.selectedArrivalDate.getTime());
    //debugger

    if (differenceInMs < 0)
      return 0;

    // Define the number of milliseconds in a day
    const millisecondsInDay: number = 1000 * 60 * 60 * 24;

    // Calculate the difference in days by 
    // dividing the difference in milliseconds by 
    // milliseconds in a day
    const differenceInDays: number =
      Math.floor(differenceInMs / millisecondsInDay);
    return differenceInDays;
  }

  onSubmit() {
    if (!this.visit.id) {
      this.createVisit(this.visit);
    }
    else {
      this.updateVisit(this.visit);
    }
  }


  createVisit(v: Visit) {
    debugger
    this.visit.services = this.selectedServices;
    this.visit.totalPrice = this.getTotalPrice();
    this.visit.arrivalDate = new Date(this.selectedArrivalDate);
    this.visit.departureDate = new Date(this.selectedDepartureDate);

    this.visit.hotelDto = this.selectedHotel;
    this.visit.petDto = this.selectedPet;
    this.visitService.createVisit(this.visit).subscribe(result => { this.router.navigate(['/hotels']) });
  }

  updateVisit(v: Visit) {
    this.visit.services = this.selectedServices;
    this.visit.totalPrice = this.totalPrice;
    this.visit.arrivalDate = new Date(this.selectedArrivalDate);
    this.visit.departureDate = new Date(this.selectedDepartureDate);
    this.visit.hotelDto = this.selectedHotel;
    this.visit.petDto = this.selectedPet;
    this.visitService.updateVisit(v).subscribe(result => { this.router.navigate(['/visits']) })
  }

  isDate(): boolean {
    return (this.selectedArrivalDate!==null);
  }
}
