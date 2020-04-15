import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MascotasServices} from '../../services/mascotas.service';
import {first} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-mascotas',
  templateUrl: './edit-mascotas.component.html',
  styleUrls: ['./edit-mascotas.component.css']
})
export class EditMascotasComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: MascotasServices) {
  }

  ngOnInit(): void {
    const mascotasId = localStorage.getItem('editMascotasId');
    if (!mascotasId) {
      alert('Acción invalida');
      this.router.navigate(['list-mascotas']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      propietario: ['', Validators.required],
      medicamento: ['', Validators.required]
    });

    this.service.getMascota(+mascotasId)
      .subscribe(data => {
        this.editForm.patchValue({
          id: data.id,
          nombre: data.nombre,
          raza: data.raza,
          edad: data.edad,
          peso: data.peso,
          propietario: data.propietario,
          medicamento: data.medicamento

        });

      });
  }

  onSubmit() {
    this.service.updateMascotas(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
          this.router.navigate(['list-mascotas']);

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


