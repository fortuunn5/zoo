import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from '../model/type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private httpClient: HttpClient) { }

  createGender(type: Type): Observable<Type> {
    return this.httpClient.post<Type>('api/types', type);
  }

  getTypes(): Observable<Type[]> {
    return this.httpClient.get<Type[]>('api/types');
  }

  getType(id: number): Observable<Type> {
    return this.httpClient.get<Type>('api/types/' + id);
  }

  updateType(type: Type) {
    return this.httpClient.put<Type>('api/types', type)
  }

  deleteType(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/types/' + id);
  }
}
