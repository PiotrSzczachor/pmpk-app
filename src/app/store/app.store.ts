import { computed, inject } from '@angular/core';
import {
  signalStore,
  withState,
  withMethods,
  patchState,
} from '@ngrx/signals';
import { AuthInfo, Event, EventDto } from '../api';
import { HttpClient } from '@angular/common/http';

export interface AppState {
  authInfo: AuthInfo | null;
  events: Array<EventDto>
  event: EventDto | null;
}

export const AppStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<AppState>({
    authInfo: null,
    events: [],
    event: null
  }),
  withMethods((store) => ({
    setAuthInfo(info: AuthInfo) {
      patchState(store, { authInfo: info });
    },
    clearAuthInfo() {
      patchState(store, { authInfo: null });
    },
    setEvents(events: Array<EventDto>) {
      patchState(store, { events: events });
    },
    clearEvents() {
      patchState(store, { events: [] });
    },
    setEvent(event: EventDto) {
      patchState(store, { event: event });
    },
    clearEvent() {
      patchState(store, { event: null });
    }
  })),
);
