import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  createPet(pet: Pet) {
    return this.httpClient.post<Pet>('api/pets', pet);
  }

  getPets(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>('api/pets');
  }

  getPet(id: number): Observable<Pet> {
    return this.httpClient.get<Pet>('api/pets/' + id);
  }

  getPetsByUser(id: number): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>('api/pets/user/' + id);
  }

  updatePet(pet: Pet) {
    return this.httpClient.put<Pet>('api/pets', pet);
  }

  deletePet(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/pets/' + id);
  }
}
