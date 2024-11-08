import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loginForm: FormGroup;
  hide = true;
  loading = false;
     readonly roles: string[] = [
    'Admin',
    'HR Manager',
    'HR Staff',
    'Employee',
    'Manager'
  ];
  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;

      // Simulate login process with a delay
      setTimeout(() => {
        this.loading = false;
      
        if(this.loginForm.get('role').value==='Admin')
{
           this.router.navigate(['/admin'])


}


      }, 2000);  // Simulated 2-second loading

    }
   if(!this.loginForm.valid){
    alert("Fill username and password")
   }

  }


}
