import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async listUsers() {
    const users = await this.http.get(environment.apiUrl).toPromise();
    return users;
  }
}
