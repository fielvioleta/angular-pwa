import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';

export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const user = JSON.parse(localStorage.getItem('user')) || {};
        const clonedRequest = req.clone({ headers: req.headers.set('token', `${user && user.profile ? user.profile.persistences : ''}`) });

        return next.handle(clonedRequest);
    }
}
