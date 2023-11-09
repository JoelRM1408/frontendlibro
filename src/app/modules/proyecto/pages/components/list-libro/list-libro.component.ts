import {AfterViewInit, Component, OnInit, ViewChild, inject} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LibroService } from 'src/app/services/libro/libro.service';



@Component({
  selector: 'app-list-libro',
  templateUrl: './list-libro.component.html',
  styleUrls: ['./list-libro.component.css']
})


export class ListLibroComponent implements OnInit{
  libros: any[]=[]


  _service = inject(LibroService);

  constructor() {

  }
  ngOnInit(): void {
    this.getallLibros()
  }



  getallLibros(){
    this._service.getallLibros().subscribe(resp => {
      this.libros = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    )
  }

  eliminar(libro: { id: any }) {
    // Realiza la eliminación de forma optimista en la vista
    const libroIndex = this.libros.findIndex((l: { id: any; }) => l.id === libro.id);
    if (libroIndex !== -1) {
      this.libros.splice(libroIndex, 1);
    }

    // Luego, intenta eliminar el libro en el servidor
    this._service.deleteLibro(libro.id).subscribe(resp => {
      //console.log();
      // if (resp !== true) {
      //   // Si la eliminación en el servidor falla, revierte la actualización en la vista
      //   this.libros.splice(libroIndex, 0, libro);
      // }
    });
  }

  editar(libro:any){
    
  }


}




