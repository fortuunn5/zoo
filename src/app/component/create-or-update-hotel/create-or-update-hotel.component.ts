import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../service/hotel.service';
import { Service } from '../../model/service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-create-or-update-hotel',
  templateUrl: './create-or-update-hotel.component.html',
  styleUrl: './create-or-update-hotel.component.css'
})
export class CreateOrUpdateHotelComponent implements OnInit {
  hotel: Hotel = new Hotel();

  selectedPhone!: string;
  selectedAddress!: string;
  selectedServices: Service[] = [];
  //animalFostering!: Service;
  

  services: Service[] = [];
  

  constructor(private hotelService: HotelService,
              private activatedRoute: ActivatedRoute,
              private serviceService: ServiceService,
              private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);

    //this.serviceService.getServiceByName('Передержка').subscribe(result => { this.animalFostering = result });

    
    if(id) {
      this.hotelService.getHotel(id).subscribe(result => {
        this.hotel = result;
      
        
        this.selectedPhone = this.hotel.phone;
        this.selectedAddress = this.hotel.address;
        this.selectedServices = this.hotel.services;
      });
    }
      this.serviceService.getServices().subscribe(result => {this.services});
  }

  onSubmit() {
    if (!this.hotel.id) {
      this.createHotel(this.hotel);
    }
    else {
      this.updateHotel(this.hotel);
    }
  }

  createHotel(h: Hotel) {
    this.hotel.phone = this.selectedPhone;
    this.hotel.address = this.selectedAddress;
    this.hotel.services = this.selectedServices;
    this.hotelService.createHotel(this.hotel).subscribe(result => { this.router.navigate(['/hotels']) });
  }

  updateHotel(h: Hotel) {
    this.hotel.phone = this.selectedPhone;
    this.hotel.address = this.selectedAddress;
    this.hotel.services = this.selectedServices;
    this.hotelService.updateHotel(this.hotel).subscribe(result => { this.router.navigate(['/hotels']) })
  }

}
