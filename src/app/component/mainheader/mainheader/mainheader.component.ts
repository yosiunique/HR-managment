import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent  {

  isAdmin = true; // Set based on actual user role
  isHRManager = false; // Set based on actual user role
  isHRStaff = false; // Set based on actual user role
  isEmployee = false; // Set based on actual user role
  isManager = false; // Set based on actual user role

  logout() {
    // Add your logout logic here
  }
}
