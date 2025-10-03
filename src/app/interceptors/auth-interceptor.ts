import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../api';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService)
    
    return next(req).pipe(
        tap({
            error: (err) => {
            if (err.status === 401) {
                const returnUrl = window.location.origin;
                const basePath = authService.configuration.basePath;
                window.document.location.href = basePath + '/auth/login?returnUrl=' + returnUrl
            }
        }
    })
  );
};
