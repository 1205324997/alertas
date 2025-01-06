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
  // Lista de productos
  products = [
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 2', price: 150 },
    { name: 'Producto 3', price: 200 },
  ];

  // Lista de mensajes
  mensajes = [
    { name: 'Mensaje 1', content: 'Contenido del mensaje 1' },
    { name: 'Mensaje 2', content: 'Contenido del mensaje 2' },
    { name: 'Mensaje 3', content: 'Contenido del mensaje 3' },
  ];

  showProducts = false;
  showmensajes = false;
  showconfig = false;

  constructor(private router: Router) {}

  // Alternar visibilidad de productos
  toggleProducts(): void {
    this.showProducts = !this.showProducts;
  }

  // Alternar visibilidad de mensajes
  toggleMensajes(): void {
    this.showmensajes = !this.showmensajes;
  }

  // Alternar visibilidad de configuraciones
  navigateToSettings(): void {
    this.showconfig = !this.showconfig;
  }

  // Cerrar sesión
  logout(): void {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}
