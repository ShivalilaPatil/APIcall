import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersdataService {
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
  SaveUsers(data: any) {
    return this.http.post(this.url, data);
  }
}
