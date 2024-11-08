import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { FrontapiService } from 'src/app/service/frontapi.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  
    employees: Employee[] = [];
    selectedEmployee: Employee | null = null;
    newEmployee: Employee = { id: 0, employeeId: '', fullName: '', department: '', position: '', salary: 0 };
  
    constructor(private hrmsService: FrontapiService) {}
  
    ngOnInit(): void {
      this.getAllEmployees();
    }
  
    getAllEmployees(): void {
      this.hrmsService.getAllEmployees().subscribe(employees => this.employees = employees);
    }
  
    selectEmployee(employee: Employee): void {
      this.selectedEmployee = { ...employee };
    }
  
    createEmployee(): void {
      this.hrmsService.createEmployee(this.newEmployee).subscribe(employee => {
        this.employees.push(employee);
        this.getAllEmployees();
        this.newEmployee = { id: 0, employeeId: '', fullName: '', department: '', position: '', salary: 0 };
      });
    }
  
    updateEmployee(): void {
      if (this.selectedEmployee) {
        this.hrmsService.updateEmployee(this.selectedEmployee.id, this.selectedEmployee).subscribe(() => {
          this.getAllEmployees();
          this.selectedEmployee = null;
        });
      }
    }
  
    deleteEmployee(id: number): void {
      this.hrmsService.deleteEmployee(id).subscribe(() => this.getAllEmployees());
    }
  }
  

