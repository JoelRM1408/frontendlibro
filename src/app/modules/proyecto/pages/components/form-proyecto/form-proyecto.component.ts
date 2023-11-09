import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Persona } from 'src/app/core/models/persona';
import { AutorService } from 'src/app/services/autor/autor.service';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { EditorialService } from 'src/app/services/editorial/editorial.service';
import { LibroService } from 'src/app/services/libro/libro.service';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort)sort: MatSort = new MatSort;


  casopropuestoForm : FormGroup =new FormGroup({});

  autores:any;
  editoriales:any;
  categorias:any;
  libros: any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'titulo', 'fechalan', 'idioma', 'paginas', 'descripcion', 'portada','autor','categoria','editorial','options']

  panelOpenState = false;
  constructor(
    public fb:FormBuilder,
    public autorService:AutorService,
    public editorialService:EditorialService,
    public categoriaService:CategoriaService,
    public libroService:LibroService,
  ){

  }
  // ngAfterViewInit(): void {
  //   this.setDataAndPagination();
  // }
  ngOnInit() {

    this.casopropuestoForm = this.fb.group ({
      id: [''],
      titulo:['', Validators.required],
      fechalan:['', Validators.required],
      idioma:['', Validators.required],
      paginas:['', Validators.required],
      descripcion:['', Validators.required],
      portada:['', Validators.required],
      autor:['', Validators.required],
      categoria:['', Validators.required],
      editorial:['', Validators.required],
    });;

    this.libroService.getallLibros().subscribe(resp => {
      this.libros = resp;
      this.setDataAndPagination();

      //console.log(resp);
    },
      error => { console.error(error) }
    )
    this.autorService.getallAutores().subscribe(resp => {
      this.autores = resp;

      //console.log(resp);
    },
      error => { console.error(error) }
    )

    this.categoriaService.getallCategorias().subscribe(resp => {
      this.categorias = resp;
      //console.log(resp);
    },
      error => { console.error(error) }
    )

    this.editorialService.getallEditoriales().subscribe(resp => {
      this.editoriales = resp;
      //console.log(resp);
    },
      error => { console.error(error) }
    )
  }


  guardar():void{
    console.log(this.casopropuestoForm.value)
    this.libroService.saveLibro(this.casopropuestoForm.value).subscribe(resp=>{
      this.casopropuestoForm.reset();
      this.libros= this.libros.filter((libro: { id: any; })=> resp.id!=libro.id);
      this.libros.push(resp);
      this.setDataAndPagination();
    },
      error=> {console.error(error)}
    )
  }

  eliminar(libro: { id: any }) {
    // Realiza la eliminación de forma optimista en la vista
    const libroIndex = this.libros.findIndex((l: { id: any; }) => l.id === libro.id);
    if (libroIndex !== -1) {
      this.libros.splice(libroIndex, 1);
    }

    // Luego, intenta eliminar el libro en el servidor
    this.libroService.deleteLibro(libro.id).subscribe(resp => {
      //console.log();
      // if (resp !== true) {
      //   // Si la eliminación en el servidor falla, revierte la actualización en la vista
      //   this.libros.splice(libroIndex, 0, libro);
      // }
    });
    this.setDataAndPagination();
  }

  editar(libro: { id:any; titulo: any; fechalan: any; idioma: any; paginas: any; descripcion: any; portada: any; autor: any; categoria: any; editorial: any; }){
    this.casopropuestoForm.setValue({
      id: libro.id,
      titulo: libro.titulo,
      fechalan: libro.fechalan,
      idioma: libro.idioma,
      paginas: libro.paginas,
      descripcion: libro.descripcion,
      portada: libro.portada,
      autor: libro.autor,
      categoria: libro.categoria,
      editorial: libro.editorial,
    })
  }
  setDataAndPagination(){
    this.dataSource = new MatTableDataSource(this.libros);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}


