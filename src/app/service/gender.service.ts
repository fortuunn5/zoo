import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from '../model/gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private httpClient: HttpClient) { }

  createGender(gender: Gender): Observable<Gender> {
    return this.httpClient.post<Gender>('api/genders', gender);
  }

  getGenders(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>('api/genders');
  }

  getGender(id: number): Observable<Gender> {
    return this.httpClient.get<Gender>('api/genders/' + id);
  }

  updateGender(gender: Gender) {
    return this.httpClient.put<Gender>('api/genders', gender)
  }

  deleteGender(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/genders/' + id);
  }
}
