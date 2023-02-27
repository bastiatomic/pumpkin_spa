import { Injectable } from '@angular/core';
import { station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {

  constructor() { }

  STATIONS : station[] = [
    {id: 0, status: "blocked", location: {x: 0, y: 0}, current_user: "ross geller", booked_until: this.randomDate()},
    {id: 1, status: "free", location: {x: 0, y: 20}, current_user: "bob james", booked_until: this.randomDate()},
    {id: 2, status: "free", location: {x: 0, y: 40}, current_user: "mike nudel", booked_until: this.randomDate()},
    {id: 3, status: "blocked", location: {x: 20, y: 0}, current_user: "jonas z", booked_until: this.randomDate()},
    {id: 4, status: "free", location: {x: 20, y: 20}, current_user: "hannah b", booked_until: this.randomDate()},
    {id: 5, status: "blocked", location: {x: 20, y: 40}, current_user: "sherwin k", booked_until: this.randomDate()},
  ]

  getStations(){
    return this.STATIONS
  }

  randomDate() {
    var start = new Date(2012, 0, 1)
    var end = new Date()
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
}
