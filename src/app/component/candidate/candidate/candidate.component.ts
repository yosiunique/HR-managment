import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { FrontapiService } from 'src/app/service/frontapi.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
    candidates: Candidate[] = [];
    selectedCandidate: Candidate | null = null;
    newCandidate: Candidate = { id: 0, name: '', email: '', phone: '', resume: '' };
  
    constructor(private hrmsService: FrontapiService) {}
  
    ngOnInit(): void {
      this.getAllCandidates();
    }
  
    getAllCandidates(): void {
      this.hrmsService.getAllCandidates().subscribe(candidates => this.candidates = candidates);
    }
  
    selectCandidate(candidate: Candidate): void {
      this.selectedCandidate = { ...candidate };
    }
  
    createCandidate(): void {
      this.hrmsService.createCandidate(this.newCandidate).subscribe(candidate => {
        this.candidates.push(candidate);
        this.getAllCandidates();
        this.newCandidate = { id: 0, name: '', email: '', phone: '', resume: '' };
      });
    }
  
    updateCandidate(): void {
      if (this.selectedCandidate) {
        this.hrmsService.updateCandidate(this.selectedCandidate.id, this.selectedCandidate).subscribe(() => {
          this.getAllCandidates();
          this.selectedCandidate = null;
        });
      }
    }
  
    deleteCandidate(id: number): void {
      this.hrmsService.deleteCandidate(id).subscribe(() => this.getAllCandidates());
    }
  }
  