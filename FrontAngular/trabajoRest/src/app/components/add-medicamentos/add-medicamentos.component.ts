import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicamentosServices } from '../../services/medicamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-medicamentos',
  templateUrl: './add-medicamentos.component.html',
  styles: []
})

export class AddMedicamentosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: MedicamentosServices) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      dosis: ['', Validators.required]
   });
  }

  onSubmit() {
    this.service.createMedicamentos( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-medicamentos']);
        Swal.fire({
          title: 'Medicamento creado con éxito!',
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
