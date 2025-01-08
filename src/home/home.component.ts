import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class HomeComponent {
  // Lista de alertas
  alertas = [
    { name: 'Alerta 1', content: 'Contenido de la alerta 1' },
    { name: 'Alerta 2', content: 'Contenido de la alerta 2' },
    { name: 'Alerta 3', content: 'Contenido de la alerta 3' },
  ];

  // Lista de estadísticas
  estadisticas = [
    { name: 'Estadística 1', value: 'Valor de la estadística 1' },
    { name: 'Estadística 2', value: 'Valor de la estadística 2' },
    { name: 'Estadística 3', value: 'Valor de la estadística 3' },
  ];

  showAlertas = false;
  showEstadisticas = false;
  showconfig = false;

  constructor(private router: Router) {}

  // Alternar visibilidad de alertas
  toggleAlertas(): void {
    this.showAlertas = !this.showAlertas;
    // Al mostrar alertas, ocultar otras secciones
    if (this.showAlertas) {
      this.showEstadisticas = false;
      this.showconfig = false;
    }
  }

  // Alternar visibilidad de estadísticas
  toggleEstadisticas(): void {
    this.showEstadisticas = !this.showEstadisticas;
    // Al mostrar estadísticas, ocultar otras secciones
    if (this.showEstadisticas) {
      this.showAlertas = false;
      this.showconfig = false;
    }
  }

  // Alternar visibilidad de configuraciones
  toggleConfiguraciones(): void {
    this.showconfig = !this.showconfig;
    // Al mostrar configuraciones, ocultar otras secciones
    if (this.showconfig) {
      this.showAlertas = false;
      this.showEstadisticas = false;
    }
  }

  // Cerrar sesión
  logout(): void {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}
