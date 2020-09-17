import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { HyTranslateService } from './translate.service';

export class AcceptLanguageHeader {

  private _translateService!: HyTranslateService;

  constructor(private _injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return {} as any;
  }
}
