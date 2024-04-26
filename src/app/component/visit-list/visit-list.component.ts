import { Component, OnInit } from '@angular/core';
import { Visit } from '../../model/visit';
import { VisitService } from '../../service/visit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrl: './visit-list.component.css'
})
export class VisitListComponent implements OnInit {
  visits: Visit[] = [];

  constructor(private visitService: VisitService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.visitService.getVisits().subscribe(result => {this.visits = result; debugger});
  }

  deleteVisit(visit: Visit) {
    debugger
    this.visitService.deleteVisit(visit.id).subscribe(result => {this.router.navigate(['/visits'])});
  }

  archiveVisit(visit: Visit) {
    this.visitService.archiveVisit(visit.id).subscribe(result => {this.router.navigate(['/visits'])});
  }
}
