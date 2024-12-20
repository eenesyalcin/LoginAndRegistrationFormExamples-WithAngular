import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {

  // active sınıfını kontrol etmek için
  isActive: boolean = false;

  // Formları değiştirmek için kullanılan fonksiyon
  toggleForm() {
    this.isActive = !this.isActive;  // 'active' sınıfını ekler ya da kaldırır
  }
  
}