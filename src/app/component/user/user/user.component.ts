import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FrontapiService } from 'src/app/service/frontapi.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  roles: string[] = ['Admin', 'HR Manager', 'HR Staff', 'Employee', 'Manager', 'Payroll Specialist', 'Recruiter'];
  users: User[] = [];
  selectedUser: User | null = null;
  newUser: User = { id: 0, username: '', password: '', fullName: '', role: '' };

  constructor(private hrmsService: FrontapiService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.hrmsService.getAllUsers().subscribe(users => this.users = users);
  }

  selectUser(user: User): void {
    this.selectedUser = { ...user };
  }

  createUser(): void {
    this.hrmsService.createUser(this.newUser).subscribe(user => {
      this.users.push(user);
      this.getAllUsers();
      this.newUser = { id: 0, username: '', password: '', fullName: '', role: '' };
    });
  }

  updateUser(): void {
    if (this.selectedUser) {
      this.hrmsService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(() => {
        this.getAllUsers();
        this.selectedUser = null;
      });
    }
  }

  deleteUser(id: number): void {
    this.hrmsService.deleteUser(id).subscribe(() => this.getAllUsers());
  }


  



}

