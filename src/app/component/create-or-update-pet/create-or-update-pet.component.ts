import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { Type } from '../../model/type';
import { Gender } from '../../model/gender';
import { PetService } from '../../service/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../../service/type.service';
import { GenderService } from '../../service/gender.service';

@Component({
  selector: 'app-create-or-update-pet',
  templateUrl: './create-or-update-pet.component.html',
  styleUrl: './create-or-update-pet.component.css'
})
export class CreateOrUpdatePetComponent implements OnInit {
  pet: Pet = new Pet();

  types: Type[] = [];
  genders: Gender[] = [];

  selectedType!: Type;
  selectedGender!: Gender;

  constructor(private petService: PetService,
              private typeService: TypeService,
              private genderService: GenderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.typeService.getTypes().subscribe(result => {this.types = result});
    this.genderService.getGenders().subscribe(result => {this.genders = result});
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);

    this.petService.getPet(id).subscribe(result => { this.pet = result });
    if (id) {
      this.selectedGender = this.pet.gender;
      this.selectedType = this.pet.type;
      
    }
    


    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // const petApi = this.petService.getPet(Number(id));
    // if(!id) {

    // }
  }

  // getTypes(): Type[] {
  //   return Object.values(Type);
  // }


  onSubmit() {
    if (!this.pet.id) {
      this.createPet(this.pet);
    }
    else {
      this.updatePet(this.pet);
    }
  }

  createPet(p: Pet) {
    debugger
    this.pet.gender = this.selectedGender;
    this.pet.type = this.selectedType;
    this.petService.createPet(p).subscribe(result => { this.router.navigate(['/pets']) })
  }

  updatePet(p: Pet) {
    this.petService.updatePet(p).subscribe(result => { this.router.navigate(['/pets']) })
  }
}
