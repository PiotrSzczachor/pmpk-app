import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../api';
import { AppStore } from '../store/app.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const appStore = inject(AppStore);
    
    return next(req).pipe(
        tap({
            error: (err) => {
            if (err.status === 401) {
                appStore.clearAuthInfo();
            }
        }
    })
  );
};
