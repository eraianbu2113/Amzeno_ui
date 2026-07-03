import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHighcharts } from 'highcharts-angular';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHighcharts(),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
