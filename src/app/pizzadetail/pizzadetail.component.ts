import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../pizza';
import {PizzaService} from '../pizza.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

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
      this.initConfig();
  }

  getPizza(): void {
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.getPizza(id)
          .subscribe(pizza => this.pizza = pizza);
    }

    retour(): void {
      this.location.back();
    }

    public payPalConfig?: PayPalConfig;
    private initConfig(): void {
        this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
          commit: true,
          client: {
            sandbox: 'ARxg37MypVAI4_5PQicExeznS6hrTYwBGd55sxphXe_svV8kajSLGie-KQgTmlfZ6GHBxSpHMYNzaEzC'
          },
          button: {
            label: 'paypal',
          },
          onPaymentComplete: (data, actions) => {
            console.log('OnPaymentComplete');
          },
          onCancel: (data, actions) => {
            console.log('OnCancel');
          },
          onError: (err) => {
            console.log('OnError');
          },
          transactions: [{
            amount: {
              currency: 'EUR',
              total: 12
            }
          }]
        });
      }

}
