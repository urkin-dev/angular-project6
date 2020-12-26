import { Component, OnInit } from '@angular/core';
import { User, MyUserType } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  myUserType = MyUserType;
  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getData();
  }

  // tslint:disable-next-line: typedef
  async getData() {
    try {
      const users = await this.usersService.getAll();
      if (users !== null && users !== undefined) {
        this.users = users;
      }
    } catch (e) {
      console.error(e);
    }
  }

  async onDeleteUser(id: number): Promise<any> {
    const index = this.users.findIndex((u) => u.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
      await this.usersService.deleteOneById(id);
    }
  }

  async onAddUser(user: User): Promise<any> {
    const lastId = this.users[this.users.length - 1].id;
    if (this.users.length > 0 && lastId !== undefined) {
      user.id = lastId + 1;
    } else {
      user.id = 0;
    }

    this.users.push(user);
    this.usersService.postOne(user);
  }

  getByType(type: number): any[] {
    return this.users.filter((user) => user.type === type);
  }

}
