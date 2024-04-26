import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../model/visit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private httpClient: HttpClient) { }

  createVisit(visit: Visit) {
    return this.httpClient.post<Visit>('api/visits', visit);
  }

  getVisit(id: number): Observable<Visit> {
    return this.httpClient.get<Visit>('api/visits/' + id);
  }

  getVisits(): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>('/api/visits');
  }

  updateVisit(visit: Visit) {
    return this.httpClient.put<Visit>('api/visits', visit);
  }

  archiveVisit(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/visits/archive/' + id);
  }

  deleteVisit(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/visits/' + id);
  }
}
