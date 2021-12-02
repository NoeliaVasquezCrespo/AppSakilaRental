import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductosComponent} from './components/productos/productos.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {DetalleDeProductoComponent} from "./components/detalle-de-producto/detalle-de-producto.component";
import {TerminarCompraComponent} from "./components/terminar-compra/terminar-compra.component";
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'producto/detalle/:id', component: DetalleDeProductoComponent},
  {path: 'terminar_compra', component: TerminarCompraComponent},
  {path: 'payment',component:PaymentComponent},
  {path: '', redirectTo: "/tienda", pathMatch: "full"},
  {path: '**', redirectTo: "/tienda"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // <- Indicar que se use el hash
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
