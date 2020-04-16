import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styles: []
})
export class AddCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  onSubmit() {
    this.service.createCustomer( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-customer']);
        Swal.fire({
          title: 'Cliente creado con éxito!',
          //text: 'Do you want to continue',
           icon: 'success',
           confirmButtonText: 'Aceptar'
        });
       /* swal({
          position: 'top',
          type: 'success',
          title: `Cliente creado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });*/
      });
  }

}
