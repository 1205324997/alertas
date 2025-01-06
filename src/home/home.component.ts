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
  products = [
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 2', price: 150 },
    { name: 'Producto 3', price: 200 },
  ];

  showProducts = false;
  showmensajes = false;
  showconfig = false;

  constructor(private router: Router) {}

  toggleProducts(): void {
    this.showProducts = !this.showProducts;
  }

  navigateToMessages(): void {
    this.showmensajes = !this.showmensajes;
  }

  navigateToSettings(): void {
    this.showconfig = !this.showconfig;
  }

  logout(): void {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}
