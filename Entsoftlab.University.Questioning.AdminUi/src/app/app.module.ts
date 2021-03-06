import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule, MatPaginatorIntl } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

import { AppService } from './app.service'
import { FacultyService } from "./faculties/faculty.service"
import { DepartmentService } from "./departments/department.service"
import { AppComponent } from './app.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyEditComponent } from './faculties/faculty-edit.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentEditComponent } from './departments/department-edit.component';
import { GroupsComponent } from './groups/groups.component';
import { MatPaginatorIntlRus } from "./MatPaginatorIntlRus";

@NgModule({
  declarations: [
    AppComponent,
    FacultiesComponent,
    FacultyEditComponent,
    ConfirmDialogComponent,
    DepartmentsComponent,
    DepartmentEditComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    FacultyEditComponent,
    DepartmentEditComponent,
    ConfirmDialogComponent
  ],
  providers: [AppService, FacultyService, DepartmentService, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRus }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
