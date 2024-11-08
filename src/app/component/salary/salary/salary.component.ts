import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/model/salary';
import { FrontapiService } from 'src/app/service/frontapi.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaries: Salary[] = [];
  selectedSalary: Salary | null = null;
  newSalary: Salary = { id: 0, employeeId: 0, amount: 0, date: new Date() };

  constructor(private hrmsService: FrontapiService) {}

  ngOnInit(): void {
    this.getAllSalaries();
  }

  getAllSalaries(): void {
    this.hrmsService.getAllSalaries().subscribe(salaries => this.salaries = salaries);
  }

  selectSalary(salary: Salary): void {
    this.selectedSalary = { ...salary };
  }

  createSalary(): void {
    this.hrmsService.createSalary(this.newSalary).subscribe(salary => {
      this.salaries.push(salary);
      this.newSalary = { id: 0, employeeId: 0, amount: 0, date: new Date() };
    });
  }

  updateSalary(): void {
    if (this.selectedSalary) {
      this.hrmsService.updateSalary(this.selectedSalary.id, this.selectedSalary).subscribe(() => {
        this.getAllSalaries();
        this.selectedSalary = null;
      });
    }
  }

  deleteSalary(id: number): void {
    this.hrmsService.deleteSalary(id).subscribe(() => this.getAllSalaries());
  }
}



