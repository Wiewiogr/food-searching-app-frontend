import { Injectable } from '@angular/core';
import { Restaurant } from './restaurants/restaurant';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private url = 'http://localhost:8080/restaurant/';

  getRestaurants(
    city: string,
    street: string,
    streetNumber: string,
    zipCode: string,
    flatNumber: string
  ): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(
      this.url +
        city +
        '/' +
        street +
        '/' +
        streetNumber +
        '/' +
        zipCode +
        '/' +
        flatNumber
    );
  }
  constructor(private httpClient: HttpClient) {}
}
