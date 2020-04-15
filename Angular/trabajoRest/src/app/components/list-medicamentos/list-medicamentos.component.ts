import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../../model/medicamentos';
import { MedicamentosServices } from '../../services/medicamentos.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-medicamentos',
  templateUrl: './list-medicamentos.component.html',
  styles: []
})
export class ListMedicamentosComponent implements OnInit {
  medicamentos: Medicamentos[];

  constructor(private router: Router, private service: MedicamentosServices) {}

  ngOnInit() {
    this.service.getMedicamentos().subscribe(data => (this.medicamentos = data));
  }

  deleteCustomer(medicamentos: Medicamentos): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  }

  editMedicamentos(medicamentos: Medicamentos): void {
    localStorage.removeItem('editMedicamentosId');
    localStorage.setItem('editMedicamentosId', medicamentos.id.toString());
    this.router.navigate(['edit-medicamentos']);
  }

  addMedicamentos(): void {
    this.router.navigate(['add-medicamentos']);
  }
}

