import { Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';

import { AddMascotasComponent } from './components/add-mascotas/add-mascotas.component';
import { EditMascotasComponent } from './components/edit-mascotas/edit-mascotas.component';
import { ListMascotasComponent } from './components/list-mascotas/list-mascotas.component';

import { AddMedicamentosComponent } from './components/add-medicamentos/add-medicamentos.component';
import { EditMedicamentosComponent } from './components/edit-medicamentos/edit-medicamentos.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';

export const ROUTES: Routes = [
    { path: 'add-customer', component: AddCustomerComponent },
    { path: 'edit-customer', component: EditCustomerComponent },
    { path: 'list-customer', component: ListCustomerComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-customer' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-customer' },

    { path: 'add-mascotas', component: AddMascotasComponent },
    { path: 'edit-mascotas', component: EditMascotasComponent },
    { path: 'list-mascotas', component: ListMascotasComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-mascotas' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-mascotas' },

    { path: 'add-medicamentos', component: AddMedicamentosComponent },
    { path: 'edit-medicamentos', component: EditMedicamentosComponent },
    { path: 'list-medicamentos', component: ListMedicamentosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-medicamentos' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-medicamentos' }
];
