import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { PizzadetailComponent } from './pizzadetail/pizzadetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzadetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
