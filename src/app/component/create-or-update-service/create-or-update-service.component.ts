import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-or-update-service',
  templateUrl: './create-or-update-service.component.html',
  styleUrl: './create-or-update-service.component.css'
})
export class CreateOrUpdateServiceComponent implements OnInit {
  service: Service = new Service;

  constructor(private serviceService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);

    this.serviceService.getService(id).subscribe(result => {this.service = result});
  }

  onSubmit() {
    if(!this.service.id) {
      this.serviceService.createService(this.service).subscribe(result => {this.router.navigate(['/services'])})
    }
    else {
      this.serviceService.updateService(this.service).subscribe(result => {this.router.navigate(['/services'])})
    }
  }
}
