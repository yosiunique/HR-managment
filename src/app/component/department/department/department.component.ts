import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { FrontapiService } from 'src/app/service/frontapi.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Department[] = [];
  selectedDepartment: Department | null = null;
  newDepartment: Department = { id: 0, departmentId: '', name: '', manager: '',budget:0 };

  constructor(private hrmsService: FrontapiService) {}

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments(): void {
    this.hrmsService.getAllDepartments().subscribe(departments => this.departments = departments);
  }

  selectDepartment(department: Department): void {
    this.selectedDepartment = { ...department };
  }

  createDepartment(): void {
    
    this.hrmsService.createDepartment(this.newDepartment).subscribe(department => {
      this.departments.push(department);
      this.getAllDepartments();
      this.newDepartment = { id: 0, departmentId: '', name: '', manager: '',budget:0 };
    });

  }

  updateDepartment(): void {
    if (this.selectedDepartment) {
      this.hrmsService.updateDepartment(this.selectedDepartment.id, this.selectedDepartment).subscribe(() => {
        this.getAllDepartments();
        this.selectedDepartment = null;
      });
    }
  }

  deleteDepartment(id: number): void {
    this.hrmsService.deleteDepartment(id).subscribe(() => this.getAllDepartments());
  }


}
