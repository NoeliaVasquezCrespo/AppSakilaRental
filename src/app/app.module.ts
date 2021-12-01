import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ProductosComponent} from './productos/productos.component';
import {VentasComponent} from './ventas/ventas.component';
import {TiendaComponent} from './tienda/tienda.component';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {TarjetaProductoComponent} from './tarjeta-producto/tarjeta-producto.component';
import {MatCardMdImage, MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {DetalleDeProductoComponent} from './detalle-de-producto/detalle-de-producto.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import { TerminarCompraComponent } from './terminar-compra/terminar-compra.component';
import {MatStepperModule} from "@angular/material/stepper";
import { DetalleDeVentaComponent } from './detalle-de-venta/detalle-de-venta.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    VentasComponent,
    TiendaComponent,
    TarjetaProductoComponent,
    DetalleDeProductoComponent,
    TerminarCompraComponent,
    DetalleDeVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
