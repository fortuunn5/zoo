import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../service/pet.service';
import { GenderService } from '../../service/gender.service';
import { TypeService } from '../../service/type.service';
import { Gender } from '../../model/gender';
import { Type } from '../../model/type';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrl: './pet-table.component.css'
})
export class PetTableComponent implements OnInit {
  pets: Pet[] = [];
  genders!: Gender[];
  types!: Type[];
  users!: User[];

  constructor(private petService: PetService,
              private genderService: GenderService,
              private typeService: TypeService,
              private userService: UserService
  ) {}

  ngOnInit(): void {
    this.petService.getPets().subscribe(result => {this.pets = result});
    this.genderService.getGenders().subscribe(result => {this.genders = result});
    this.typeService.getTypes().subscribe(result => {this.types = result});
    this.userService.getUsers().subscribe(result => {this.users = result});
  }

  onDelete(p: Pet) {
    debugger
    this.petService.deletePet(p.id).subscribe(result => {
      this.pets = this.pets.filter(data => p.id !== data.id);
    })
  }

  onAdd() {
    this.pets.push(new Pet());
  }

  onUpdate(p: Pet) {
    if (p.id) {
      this.petService.updatePet(p).subscribe(result => {
        p = result;
        this.petService.getPets().subscribe(data => {this.pets = data});
      })
    }
    else {
      this.petService.createPet(p).subscribe(result => {
        p = result;
        this.petService.getPets().subscribe(data => {this.pets = data});
      })
    }

  }
}
