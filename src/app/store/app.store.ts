import { computed } from '@angular/core';
import {
  signalStore,
  withState,
  withMethods,
  patchState,
} from '@ngrx/signals';
import { AuthInfo } from '../api';

export interface AppState {
  authInfo: AuthInfo | null;
}

export const AppStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<AppState>({
    authInfo: null
  }),
  withMethods((store) => ({
    setAuthInfo(info: AuthInfo) {
      patchState(store, { authInfo: info });
    },
    clearAuthInfo() {
      patchState(store, { authInfo: null });
    }
  }))
);
