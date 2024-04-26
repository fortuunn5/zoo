import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../service/hotel.service';
import { Service } from '../../model/service';
import { ServiceService } from '../../service/service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-hotel-table',
  templateUrl: './hotel-table.component.html',
  styleUrl: './hotel-table.component.css'
})
export class HotelTableComponent implements OnInit {
  hotels: Hotel[] = [];
  services: Service[] = [];

  constructor(private hotelService: HotelService,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(result => {
      this.hotels = result;
      //his.serviceService.getServicesByHotel(this.)
    });
    this.serviceService.getServices().subscribe(result => { this.services = result });
  }

  onDelete(h: Hotel) {
    debugger
    this.hotelService.deleteHotel(h.id).subscribe(result => {
      this.hotels = this.hotels.filter(data => h.id !== data.id);
    })
  }

  onAdd() {
    this.hotels.push(new Hotel());
  }

  onUpdate(h: Hotel) {
    if (h.id) {
      this.hotelService.updateHotel(h).subscribe(result => {
        h = result;
        this.hotelService.getHotels().subscribe(data => {this.hotels = data});
      })
    }
    else {
      this.hotelService.createHotel(h).subscribe(result => {
        h = result;
        this.hotelService.getHotels().subscribe(data => {this.hotels = data});
      })
    }

  }
}
