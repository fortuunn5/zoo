import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../service/hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit {
  hotel: Hotel = new Hotel();

  constructor(private hotelService: HotelService,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.hotelService.getHotel(id).subscribe(result => {this.hotel = result});
  }
}
