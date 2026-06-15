import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { UsersState } from './users.model';

export const usersFeatureKey = 'users';

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = createReducer(
  initialState,

  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(UsersActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
    loading: false,
    error: null,
  })),

  on(UsersActions.loadUsersFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);