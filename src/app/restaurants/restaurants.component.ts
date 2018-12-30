import { Component, OnInit, ViewChild } from '@angular/core';
import { Restaurant } from './restaurant';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  constructor(private restaurantsService: RestaurantsService) {}

  restaurants: Restaurant[];
  displayedColumns: string[] = [
    'name',
    'minimumOrderValue',
    'distance',
    'deliveryFee'
  ];
  dataSource: MatTableDataSource<Restaurant>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  city: string;
  street: string;
  streetNumber: string;
  flatNumber: string;
  postalCode: string;

  findRestaurants() {
    this.restaurantsService
      .getRestaurants(
        this.city,
        this.street,
        this.streetNumber,
        this.postalCode,
        this.flatNumber
      )
      .subscribe(restaurants => {
        this.restaurants = restaurants;
        this.dataSource = new MatTableDataSource(restaurants);
        this.dataSource.sort = this.sort;
      });
  }
  ngOnInit() {}
}
