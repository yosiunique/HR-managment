import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './component/user/user/user.component';
import { SalaryComponent } from './component/salary/salary/salary.component';
import { EmployeComponent } from './component/employee/employe/employe.component';
import { AttendanceComponent } from './component/attendance/attendance/attendance.component';
import { DepartmentComponent } from './component/department/department/department.component';
import { CompanyComponent } from './component/company/company/company.component';
import { LoginComponent } from './login/login/login.component';
import { CandidateComponent } from './component/candidate/candidate/candidate.component';
import { WelcomComponent } from './component/welecom/welcom/welcom.component';



const routes: Routes = [
  {
    path:"users",
    component:UserComponent,
  },
  {
    path:"candidate",
    component:CandidateComponent,
  },
  {
    path:"admin",
    component:WelcomComponent,
  },
  {
    path:"salary",
    component:SalaryComponent,
  }
  , 
  {
    path:"",
    component:HomeComponent,
  }
,
  {
    path:"employee",
    component:EmployeComponent,
  },
  {
    path:"attendance",
    component:AttendanceComponent,
  },
  {
    path:"dep",
    component:DepartmentComponent,
  }
  , 
  {
    path:"company",
    component:CompanyComponent,
  },
  {
path:'login',
component:LoginComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
