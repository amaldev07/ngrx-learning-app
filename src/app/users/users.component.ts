import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UsersFacadeService } from './users.facade';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  private usersFacade = inject(UsersFacadeService);

  users$ = this.usersFacade.users$;
  loading$ = this.usersFacade.loading$;
  error$ = this.usersFacade.error$;

  loadUsers(): void {
    this.usersFacade.loadUsers();
  }
}