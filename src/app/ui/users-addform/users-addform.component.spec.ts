import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddformComponent } from './users-addform.component';

describe('UsersAddformComponent', () => {
  let component: UsersAddformComponent;
  let fixture: ComponentFixture<UsersAddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAddformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
