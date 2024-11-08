import { Component, OnInit } from '@angular/core';
import { Attendance } from 'src/app/model/attendance';
import { FrontapiService } from 'src/app/service/frontapi.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

    attendances: Attendance[] = [];
    selectedAttendance: Attendance | null = null;
    newAttendance: Attendance = { id: 0, employeeId: 0, date: new Date(), status:'' };
  
    constructor(private hrmsService: FrontapiService) {}
  
    ngOnInit(): void {
      this.getAllAttendances();
    }
  
    getAllAttendances(): void {
      this.hrmsService.getAllAttendances().subscribe(attendances => this.attendances = attendances);
    }
  
    selectAttendance(attendance: Attendance): void {
      this.selectedAttendance = { ...attendance };
    }
  
    createAttendance(): void {
      this.hrmsService.createAttendance(this.newAttendance).subscribe(attendance => {
        this.attendances.push(attendance);
        this.getAllAttendances();
        this.newAttendance = { id: 0, employeeId: 0, date: new Date(), status: 'Absent' };
      });
    }
  
    updateAttendance(): void {
      if (this.selectedAttendance) {
        this.hrmsService.updateAttendance(this.selectedAttendance.id, this.selectedAttendance).subscribe(() => {
          this.getAllAttendances();
          this.selectedAttendance = null;
        });
      }
    }
  
    deleteAttendance(id: number): void {
      this.hrmsService.deleteAttendance(id).subscribe(() => this.getAllAttendances());
    }
  }
  