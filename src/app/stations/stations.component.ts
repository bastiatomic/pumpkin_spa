import { Component } from '@angular/core';
import { StationServiceService } from '../station-service.service';
import { station } from '../station';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {

  stations : station[] = []

  constructor(private sS : StationServiceService){}

  ngOnInit(){
    this.stations = this.sS.getStations()
  }
  toDEstring(date: Date) {
    var dateStr =
        ("00" + date.getDate()).slice(-2) + "." +
        ("00" + (date.getMonth() + 1)).slice(-2) + "." +
        date.getFullYear() + " " +
        " " +
        ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2) + ":" +
        ("00" + date.getSeconds()).slice(-2);
    return dateStr;

}

}
