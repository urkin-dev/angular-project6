import { Component, OnInit } from '@angular/core';
import { User, MyUserType } from 'src/app/shared/models/user.model';
import { UserAgePipe } from 'src/app/shared/pipes/user-age.pipe';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  myUserType = MyUserType;
  users: User[] = [];
  searchStr = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<any> {
    try {
      const users = await this.usersService.getAll();
      if (users !== null && users !== undefined) {
        this.users = users;
        this.filterUsers();
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

    this.usersService.postOne(user);

    const ageUserFilter = new UserAgePipe();
    user.birthday = '' + ageUserFilter.transform(user.birthday); // Filter birthday to age
    this.users.push(user);
  }

  getByType(type: number): any[] {
    return this.users.filter((user) => user.type === type);
  }

  filterUsers(): void {
    const ageUserFilter = new UserAgePipe();
    this.users = this.users.filter(user => {
      user.birthday = '' + ageUserFilter.transform(user.birthday);
      return user;
    });
  }

}
