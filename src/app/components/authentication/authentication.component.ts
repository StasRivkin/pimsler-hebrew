import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  authForm: FormGroup;
  isLoginMode: boolean = true;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''] // Only required for registration mode
    });
  }

  switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    if (this.isLoginMode) {
      this.authForm.get('confirmPassword')?.clearValidators();
      this.authForm.get('confirmPassword')?.updateValueAndValidity();
    } else {
      this.authForm.get('confirmPassword')?.setValidators([Validators.required]);
      this.authForm.get('confirmPassword')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    const {email, password, confirmPassword} = this.authForm.value;

    if (this.isLoginMode) {
      console.log('Login:', {email, password});
    } else {
      if (password !== confirmPassword) {
        console.error('Passwords do not match!');
        return;
      }
      console.log('Register:', {email, password});
    }
  }
}
