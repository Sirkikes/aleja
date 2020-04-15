import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: []
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  ngOnInit() {

    const customerId = localStorage.getItem('editCustomerId');

    if ( !customerId ) {
      alert('Acción invalida');
      this.router.navigate(['list-customer']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
    });

    this.service.getCustomer(+customerId)
      .subscribe(data => {
        this.editForm.patchValue({
          id: data.id,
          cedula: data.cedula,
          nombre: data.nombre,
          apellido: data.apellido,
          direccion: data.direccion,
          telefono: data.telefono
        });
      });
  }

  onSubmit() {
    this.service.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-customer']);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cliente modificado con exito',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
