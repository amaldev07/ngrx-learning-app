import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsersActions } from './users.actions';
import { UsersService } from './users.service';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.loadUsers),

      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users) =>
            UsersActions.loadUsersSuccess({ users })
          ),

          catchError((error) =>
            of(
              UsersActions.loadUsersFailure({
                error: error.message || 'Failed to load users',
              })
            )
          )
        )
      )
    );
  });
}