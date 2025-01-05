import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Proveer rutas de la aplicación
    provideHttpClient(), // Opcional: si usas HTTP
    importProvidersFrom(ReactiveFormsModule), // Proveer ReactiveFormsModule globalmente
  ],
};
