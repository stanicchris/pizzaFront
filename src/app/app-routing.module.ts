import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzadetailComponent} from './pizzadetail/pizzadetail.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
    {path: 'pizzas', component: PizzaListComponent},
    {path: 'pizzas/:id', component: PizzadetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}