import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {MedicamentosServices} from '../../services/medicamentos.service';


@Component({
  selector: 'app-edit-medicamentos',
  templateUrl: './edit-medicamentos.component.html',
  styleUrls: ['./edit-medicamentos.component.css']
})
export class EditMedicamentosComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;

  constructor(private  formBuilder: FormBuilder, private  router: Router, private service: MedicamentosServices) {
  }


  ngOnInit(): void {
    const medicamentosId = localStorage.getItem('editMedicamentosId');
    if (!medicamentosId){
      alert('Acción invalida');
      this.router.navigate(['list-medicamentos']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      dosis: ['', Validators.required]
    });

    this.service.getMedicamento(+medicamentosId) .subscribe(data => {

      this.editForm.patchValue({
       id: data.id,
        identificacion: data.identificacion,
        nombre: data.nombre,
        dosis: data.dosis

      });
    });

}
  onSubmit() {
    this.service.updateMedicamentos(this.editForm.value).pipe(first())
      .subscribe(data => {
        this.router.navigate(['list-medicamentos']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Medicamento modificado con exito',
          showConfirmButton: false,
          timer: 1500
        });
        },
        error => {
          alert(error);
        });
      }
  }
