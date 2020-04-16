import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotasServices } from '../../services/mascotas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-mascotas',
  templateUrl: './add-mascotas.component.html',
  styles: []
})

export class AddMascotasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: MascotasServices) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      propietario: ['', Validators.required],
      medicamento: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createMascotas( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-mascotas']);
        Swal.fire({
          title: 'Mascota creada con éxito!',
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
