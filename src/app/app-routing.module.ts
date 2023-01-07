import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';


const routes: Routes = [
  {
    path:'',
    component:EmployeeCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
