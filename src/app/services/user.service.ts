import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/${id}`);
  }
  updateUser(id: number, user: User) {
    return this.http.put(`${this.baseUrl}users/${id}`, user);
  }
}
