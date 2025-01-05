import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-login',
  standalone: true, // Componente autónomo
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule], // Importa ReactiveFormsModule
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inyecta el Router en el constructor
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario de inicio de sesión:', this.loginForm.value);

      // Aquí deberías agregar la lógica de autenticación con Firebase
      // Suponiendo que el login es exitoso, redirige al home
      this.router.navigate(['/home']).then(() => {
        console.log('Navegación a /home completada.');
      });
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']).then(() => {
      console.log('Navegación a /register completada.');
    });
  }

  ngOnInit(): void {
    console.log('Componente Login cargado');
  }
}
