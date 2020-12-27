import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  orderByTitle = '';
  ascOrder = false;

  @Input() title = '';
  @Input() users: User[] = [];

  @Output() deleteUser = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDelete(id: any): void {
    this.deleteUser.emit(id);
  }

  onLinkEdit(id: any): void {
    this.router.navigate([this.router.url, 'edit', id]);
  }

  orderBy(param: string): void {
    this.orderByTitle = param;
    this.ascOrder = !this.ascOrder;
  }

}
