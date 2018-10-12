import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzadetailsComponent} from './pizzadetails/pizzadetails.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
    {path: 'pizzas', component: PizzaListComponent},
    {path: 'pizzas/:id', component: PizzadetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}