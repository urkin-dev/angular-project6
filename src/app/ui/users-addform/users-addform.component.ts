import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyUserType, User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-addform',
  templateUrl: './users-addform.component.html',
  styleUrls: ['./users-addform.component.scss']
})
export class UsersAddformComponent implements OnInit {
  MyUserType = MyUserType;
  name = '';
  surname = '';
  phone = '';
  type = 0;
  email = '';
  birthday = '';
  addform!: FormGroup;
  disabledForms = false;

  @Output() addUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
    this.addform = new FormGroup({
      firstName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      lastName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      phone: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      type: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required
      ]),
      email: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required
      ]),
      birthday: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required
      ])
    });
  }

  onAddUser(): void {
    this.addUser.emit({
      name: this.name,
      surname: this.surname,
      type: this.type,
      phone: this.phone,
      email: this.email,
      birthday: this.birthday
    });
  }

}
