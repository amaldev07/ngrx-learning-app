import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersActions } from './users.actions';
import {
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from './users.selectors';

@Injectable({
  providedIn: 'root',
})
export class UsersFacadeService {
  private store = inject(Store);

  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectUsersLoading);
  error$ = this.store.select(selectUsersError);

  loadUsers(): void {
    this.store.dispatch(UsersActions.loadUsers());
  }
}