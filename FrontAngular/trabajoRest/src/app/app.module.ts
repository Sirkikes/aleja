import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { AddMascotasComponent } from './components/add-mascotas/add-mascotas.component';
import { EditMascotasComponent } from './components/edit-mascotas/edit-mascotas.component';
import { ListMascotasComponent } from './components/list-mascotas/list-mascotas.component';
import { AddMedicamentosComponent } from './components/add-medicamentos/add-medicamentos.component';
import { EditMedicamentosComponent } from './components/edit-medicamentos/edit-medicamentos.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';

// Importar rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    AddMascotasComponent,
    EditMascotasComponent,
    ListMascotasComponent,
    AddMedicamentosComponent,
    EditMedicamentosComponent,
    ListMedicamentosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
