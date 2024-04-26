import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {}

  createService(service: Service) {
    return this.httpClient.post<Service>('api/services', service);
  }

  getService(id: number): Observable<Service> {
    return this.httpClient.get<Service>('api/services/' + id);
  }

  getServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>('api/services');
  }

  getServicesByHotel(hotelId: number): Observable<Service[]> {
    return this.httpClient.get<Service[]>('api/services/byHotel/' + hotelId);
  }

  getServiceByName(name: string): Observable<Service> {
    return this.httpClient.get<Service>('api/services/name/' + name);
  }

  updateService(service: Service) {
    return this.httpClient.put<Service>('api/services', service);
  }

  deleteService(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/services/' + id);
  }
}
