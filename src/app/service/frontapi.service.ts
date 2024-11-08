import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { Salary } from 'src/app/model/salary';
import { Employee } from 'src/app/model/employee';
import { Department } from 'src/app/model/department';
import { Company } from 'src/app/model/company';
import { Candidate } from 'src/app/model/candidate';
import { Attendance } from 'src/app/model/attendance';

@Injectable({
  providedIn: 'root'
})
export class FrontapiService {

  private apiUrl = 'http://localhost:8080/api/hrms'; // Update the base URL as necessary

  constructor(private http: HttpClient) {}

  // HTTP Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  // User Management
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
getUserByUserName(userName:String):Observable<User>{
  return this.http.get<User>(`${this.apiUrl}/users/${userName}`);
}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user, this.httpOptions);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${id}`, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  // Salary Management
  getAllSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(`${this.apiUrl}/salaries`);
  }

  getSalaryById(id: number): Observable<Salary> {
    return this.http.get<Salary>(`${this.apiUrl}/salaries/${id}`);
  }

  createSalary(salary: Salary): Observable<Salary> {
    return this.http.post<Salary>(`${this.apiUrl}/salaries`, salary, this.httpOptions);
  }

  updateSalary(id: number, salary: Salary): Observable<Salary> {
    return this.http.put<Salary>(`${this.apiUrl}/salaries/${id}`, salary, this.httpOptions);
  }

  deleteSalary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/salaries/${id}`);
  }

  // Employee Management
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/employees`, employee, this.httpOptions);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/employees/${id}`, employee, this.httpOptions);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employees/${id}`);
  }

  // Department Management
  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/departments/${id}`);
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.apiUrl}/departments`, department, this.httpOptions);
  }

  updateDepartment(id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/departments/${id}`, department, this.httpOptions);
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/departments/${id}`);
  }

  // Company Management
  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/${id}`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}/companies`, company, this.httpOptions);
  }

  updateCompany(id: number, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/companies/${id}`, company, this.httpOptions);
  }

  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/companies/${id}`);
  }

  // Candidate Management
  getAllCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.apiUrl}/candidates`);
  }

  getCandidateById(id: number): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.apiUrl}/candidates/${id}`);
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(`${this.apiUrl}/candidates`, candidate, this.httpOptions);
  }

  updateCandidate(id: number, candidate: Candidate): Observable<Candidate> {
    return this.http.put<Candidate>(`${this.apiUrl}/candidates/${id}`, candidate, this.httpOptions);
  }

  deleteCandidate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/candidates/${id}`);
  }

  // Attendance Management
  getAllAttendances(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}/attendances`);
  }

  getAttendanceById(id: number): Observable<Attendance> {
    return this.http.get<Attendance>(`${this.apiUrl}/attendances/${id}`);
  }

  createAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(`${this.apiUrl}/attendances`, attendance, this.httpOptions);
  }

  updateAttendance(id: number, attendance: Attendance): Observable<Attendance> {
    return this.http.put<Attendance>(`${this.apiUrl}/attendances/${id}`, attendance, this.httpOptions);
  }

  deleteAttendance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/attendances/${id}`);
  }
}
