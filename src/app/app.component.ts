import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
   
  }

}
