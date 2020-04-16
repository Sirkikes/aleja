import { Component, OnInit } from '@angular/core';
import { Mascotas } from '../../model/mascotas';
import { MascotasServices } from '../../services/mascotas.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-mascotas',
  templateUrl: './list-mascotas.component.html',
  styles: []
})
export class ListMascotasComponent implements OnInit {
  mascotas: Mascotas[];

  constructor(private router: Router, private service: MascotasServices) {}

  ngOnInit() {
    this.service.getMascotas().subscribe(data => (this.mascotas = data));
  }

deleteMascotas(mascotas: Mascotas): void {
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
        this.service.deleteMascotas(mascotas.id).subscribe({
          next: result => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.service.getMascotas().subscribe({
              next: result => {
                this.mascotas=result;
              }
            });
          },
          error: error => {
            Swal.fire(
              'Error!',
               error,
              'warning'
            );
          }
        })

      }
    });
  }

  editMascotas(mascotas: Mascotas): void {
    localStorage.removeItem('editMascotasId');
    localStorage.setItem('editMascotasId', mascotas.id.toString());
    this.router.navigate(['edit-mascotas']);
  }

  addMascotas(): void {
    this.router.navigate(['add-mascotas']);
  }
}
