
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css',

})
export class MensajeComponent {
  mensaje = [
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 2', price: 150 },
    { name: 'Producto 3', price: 200 },
  ];
}
