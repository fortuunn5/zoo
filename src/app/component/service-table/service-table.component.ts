import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrl: './service-table.component.css'
})
export class ServiceTableComponent implements OnInit {
  services: Service[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(result => {this.services = result});
  }

  onDelete(s: Service) {
    debugger
    this.serviceService.deleteService(s.id).subscribe(result => {
      this.services = this.services.filter(data => s.id !== data.id);
    })
  }

  onAdd() {
    this.services.push(new Service());
  }

  onUpdate(s: Service) {
    if (s.id) {
      this.serviceService.updateService(s).subscribe(result => {
        s = result;
        this.serviceService.getServices().subscribe(data => {this.services = data});
      })
    }
    else {
      this.serviceService.createService(s).subscribe(result => {
        s = result;
        this.serviceService.getServices().subscribe(data => {this.services = data});
      })
    }

  }

  isAF(s: Service): boolean {
    return (s.name === 'Передержка');
  }
}
