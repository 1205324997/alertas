import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule],
})
export class ProductsComponent {
  products = [
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 2', price: 150 },
    { name: 'Producto 3', price: 200 },
  ];
}
