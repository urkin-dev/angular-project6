import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyUserType, User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  id!: number;
  user!: User;
  userForm!: FormGroup;
  MyUserType = MyUserType;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      surname: new FormControl(null, [
        Validators.required
      ]),
      phone: new FormControl({ value: '' }, [
        Validators.required,
      ]),
      type: new FormControl({ value: '' }, [
        Validators.required
      ]),
      email: new FormControl({ value: '' }, [
        Validators.required
      ]),
      birthday: new FormControl({ value: '' }, [
        Validators.required
      ])
    });

    this.getData();
  }

  async getData(): Promise<any> {
    try {
      this.user = await this.userService.getOneById(this.id);
    } catch (e) {
      console.error(e);
    }
    this.userForm.patchValue({
      name: this.user.name,
      surname: this.user.surname,
      phone: this.user.phone,
      email: this.user.email,
      birthday: this.user.birthday,
      type: this.user.type
    });
  }

  async onSave(): Promise<any> {
    try {
      const birthday = this.userForm.value.birthday;

      if (birthday.indexOf('/') === -1) {
        this.userForm.value.birthday = (birthday.slice(0, 2) + '/' + birthday.slice(2, 4) + '/' + birthday.slice(4, 8));
      }

      await this.userService.putOneById(this.id, this.userForm.value);
      this.router.navigate(['/users']);
    } catch (e) {
      console.error(e);
    }
  }

  async onDelete() : Promise<any> {
    try {
      await this.userService.deleteOneById(this.id);
    } catch (e) {
      console.error(e);
    }
    this.router.navigate(['/users']);
  }

}
