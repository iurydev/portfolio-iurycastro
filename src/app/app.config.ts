import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideTransloco({
        config: {
            availableLangs: ['en', 'pt-br'],
            defaultLang: 'pt-br',
            reRenderOnLangChange: true,
            prodMode: !isDevMode(),
            fallbackLang: 'en',
        },
        loader: TranslocoHttpLoader,
    }),
    provideAnimations()
],
};
