import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() title = '';
  @Input() users: User[] = [];

  @Output() deleteUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: any): void {
    this.deleteUser.emit(id);
  }

}
