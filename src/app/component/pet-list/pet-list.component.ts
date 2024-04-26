import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../service/pet.service';
import { Router } from '@angular/router';
import { Gender } from '../../model/gender';
import { Type } from '../../model/type';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  users!: User[];

  constructor(private petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(result => { this.pets = result; debugger });
  }



  deletePet(pet: Pet) {
    debugger
    this.petService.deletePet(pet.id).subscribe(result => { location.reload() })
  }

  years(pet: Pet): boolean {
    return (pet.age % 10) < 5 && !(9 < pet.age && pet.age < 21);
  }

  // getType(pet: Pet): string {
  //   debugger
  //   const t= pet.type;
  //   return t;
  //   switch (t) {
  //     case Object.keys(Type).find(x=>Type.CAT):
  //       return 'Кошка'
  //       break;

  //     case Object.keys(Type).find(x=>x==Type.DOG):
  //       return 'Собака';
  //       break;

  //     case Object.keys(Type).find(x=>Type.RACCOON):
  //       return 'Енот';
  //       break;
  //     case Object.keys(Type).find(x=>Type.CHINCHILLA):
  //       return 'Шиншилла';
  //       break;

  //     case Object.keys(Type).find(x=>Type.GUINEA_PIG):
  //       return 'Морская свинка';
  //       break;

  //     case Object.keys(Type).find(x=>Type.RABBIT):
  //       return 'Кролик';
  //       break;
      
  //     case Object.keys(Type).find(x=>Type.HAMSTER):
  //       return 'Хомяк';
  //       break;

  //     case Object.keys(Type).find(x=>Type.MOUSE):
  //       return 'Мышь';
  //       break;

  //     case Object.keys(Type).find(x=>Type.RAT):
  //       return 'Крыса';
  //       break;
  //   }
  //   return "hz";
  // }


  
}
