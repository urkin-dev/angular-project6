import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from '../ui/users-table/users-table.component';
import { UsersAddformComponent } from '../ui/users-addform/users-addform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { UserAgePipe } from '../shared/pipes/user-age.pipe';
import { FilterByNameAndSurnamePipe } from '../shared/pipes/filter-by-name-and-surname.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { UserEditComponent } from './user-edit/user-edit.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    UserListComponent,
    UsersComponent,
    UsersTableComponent,
    UsersAddformComponent,
    UserAgePipe,
    FilterByNameAndSurnamePipe,
    OrderByPipe,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class UsersModule { }
