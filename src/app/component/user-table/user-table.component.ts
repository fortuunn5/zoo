import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { Pet } from '../../model/pet';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(result => {this.users = result});
  }

  onDelete(u: User) {
    debugger
    this.userService.deleteUser(u.id).subscribe(result => {
      this.users = this.users.filter(data => u.id !== data.id);
      //this.userService.getUsers().subscribe(result => {this.users = result;location.reload()})
    })
  }

  onAdd() {
    this.users.push(new User());
  }

  onUpdate(u: User) {
    if (u.id) {
      debugger
      this.userService.updateUser(u).subscribe(result => {
        u = result;
        this.userService.getUsers().subscribe(data => {this.users = data});
      })
    }
    else {
      this.userService.createUser(u).subscribe(result => {
        u = result;
        this.userService.getUsers().subscribe(data => {this.users = data});
      })
    }

  }
}
