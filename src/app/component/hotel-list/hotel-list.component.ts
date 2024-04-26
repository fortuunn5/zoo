import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../service/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(result => {this.hotels = result});
  }

  onclickHandler(hot: Hotel) {
    const url: String = '/hotels/' + hot.id;
    this.router.navigate([url]);
    console.log("onclickHandler");
  }
}
