import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: User) {
    return this.httpClient.post<User>('api/users', user);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>('api/users/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users');
  }

  updateUser(user: User) {
    return this.httpClient.put<User>('api/users', user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>('api/users/' + id);
  }
}
