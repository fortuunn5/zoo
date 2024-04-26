import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient: HttpClient) { }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.httpClient.post<Hotel>('api/hotels', hotel);
  }

  getHotels(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>('api/hotels');
  }

  getHotel(id: number): Observable<Hotel> {
    return this.httpClient.get<Hotel>('api/hotels/' + id);
  }

  getServicesByHotel(): Observable<any> {
    return this.httpClient.get<any>('api/hotels/map')
  }

  updateHotel(hotel: Hotel) {
    return this.httpClient.put<Hotel>('api/hotels', hotel)
  }

  deleteHotel(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/hotels/' + id);
  }
}
