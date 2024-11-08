import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { FrontapiService } from 'src/app/service/frontapi.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
    companies: Company[] = [];
    selectedCompany: Company | null = null;
    newCompany: Company = { id: 0, name: '', address: '', contactNumber: '' };
  
    constructor(private hrmsService: FrontapiService) {}
  
    ngOnInit(): void {
      this.getAllCompanies();
    }
  
    getAllCompanies(): void {
      this.hrmsService.getAllCompanies().subscribe(companies => this.companies = companies);
    }
  
    selectCompany(company: Company): void {
      this.selectedCompany = { ...company };
    }
  
    createCompany(): void {
      this.hrmsService.createCompany(this.newCompany).subscribe(company => {
        this.companies.push(company);
        this.newCompany = { id: 0, name: '', address: '', contactNumber: '' };
      });
    }
  
    updateCompany(): void {
      if (this.selectedCompany) {
        this.hrmsService.updateCompany(this.selectedCompany.id, this.selectedCompany).subscribe(() => {
          this.getAllCompanies();
          this.selectedCompany = null;
        });
      }
    }
  
    deleteCompany(id: number): void {
      this.hrmsService.deleteCompany(id).subscribe(() => this.getAllCompanies());
    }
  }
  