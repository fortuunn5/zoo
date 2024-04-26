import { Component, OnInit } from '@angular/core';
import { Visit } from '../../model/visit';
import { VisitService } from '../../service/visit.service';


@Component({
  selector: 'app-visit-table',
  templateUrl: './visit-table.component.html',
  styleUrl: './visit-table.component.css'
})
export class VisitTableComponent implements OnInit {
  visits: Visit[] = [];

  constructor(private visitService: VisitService) {}

  ngOnInit(): void {
    this.visitService.getVisits().subscribe(result => {this.visits = result; debugger});
  }

  onDelete(v: Visit) {
    debugger
    this.visitService.deleteVisit(v.id).subscribe(result => {
      this.visits = this.visits.filter(data => v.id !== data.id);
    })
  }

  onAdd() {
    this.visits.push(new Visit());
  }

  onUpdate(v: Visit) {
    if (v.id) {
      this.visitService.updateVisit(v).subscribe(result => {
        v = result;
        this.visitService.getVisits().subscribe(data => {this.visits = data});
      })
    }
    else {
      this.visitService.createVisit(v).subscribe(result => {
        v = result;
        this.visitService.getVisits().subscribe(data => {this.visits = data});
      })
    }

  }
}
