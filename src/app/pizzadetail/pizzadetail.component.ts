import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../pizza';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-pizzadetail',
  templateUrl: './pizzadetail.component.html',
  styleUrls: ['./pizzadetail.component.css']
})
export class PizzadetailComponent implements OnInit {
  pizza: Pizza;
  constructor(
      private activateRoute: ActivatedRoute,
      private location: Location,
      private pizzaService: PizzaService
  ) { }

  ngOnInit() {
      this.getPizza();
  }

  getPizza(): void {
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.getPizza(id)
          .subscribe(pizza => this.pizza = pizza);
    }

    retour(): void {
      this.location.back();
    }

}
