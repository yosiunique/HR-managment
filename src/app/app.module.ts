import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { SalaryComponent } from './component/salary/salary/salary.component';
import { EmployeComponent } from './component/employee/employe/employe.component';
import { DepartmentComponent } from './component/department/department/department.component';
import { CompanyComponent } from './component/company/company/company.component';
import { CandidateComponent } from './component/candidate/candidate/candidate.component';
import { AttendanceComponent } from './component/attendance/attendance/attendance.component';
import { UserComponent } from './component/user/user/user.component';
import { HeaderComponent } from './component/header/header/header.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSelect, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { LoginComponent } from './login/login/login.component';
import { MainheaderComponent } from './component/mainheader/mainheader/mainheader.component';
import { WelcomComponent } from './component/welecom/welcom/welcom.component';


@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    SalaryComponent,
    EmployeComponent,
    DepartmentComponent,
    CompanyComponent,
    CandidateComponent,
    AttendanceComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainheaderComponent,
    WelcomComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSelectModule, MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
