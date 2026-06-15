import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey } from './users.reducer';
import { UsersState } from './users.model';

export const selectUsersState =
    createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
    selectUsersState,
    (state) => state.users
);

export const selectUsersLoading = createSelector(
    selectUsersState,
    (state) => state.loading
);

export const selectUsersError = createSelector(
    selectUsersState,
    (state) => state.error
);