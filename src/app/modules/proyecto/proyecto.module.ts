import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { OptionsComponent } from './pages/components/options/options.component';
import {MatInputModule} from '@angular/material/input'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormProyectoComponent } from './pages/components/form-proyecto/form-proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { PruebaComponent } from './pages/components/prueba/prueba.component';
import { StandComponent } from 'src/app/shared/components/stand/stand.component';
import {MatSelectModule} from '@angular/material/select';
import { ListLibroComponent } from './pages/components/list-libro/list-libro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    ProyectoComponent,
    OptionsComponent,
    FormProyectoComponent,
    ListLibroComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    StandComponent,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatToolbarModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoModule { }
