import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent implements OnInit {
  services: Service[] = [];

  constructor(private serviceService: ServiceService,
              private router: Router
  ) {}

  ngOnInit(): void {
    debugger
    this.serviceService.getServices().subscribe(result => {this.services = result});
  }

  deleteService(service: Service) {
    this.serviceService.deleteService(service.id).subscribe(result => {this.router.navigate(['/services'])})
  }
}
