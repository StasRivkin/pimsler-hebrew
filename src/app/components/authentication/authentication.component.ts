import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileDataService} from "../../services/profileData/profile-data.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  authForm: FormGroup = this.fb.group({});
  isLoginMode: boolean = true;
  errorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private profileDataService: ProfileDataService,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: [''],
      lastName: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });
    this.resetErrorOnInput();
  }

  resetErrorOnInput(): void {
    this.authForm.get('email')?.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
    this.authForm.get('firstName')?.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
    this.authForm.get('lastName')?.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
    this.authForm.get('password')?.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
    this.authForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    if (this.isLoginMode) {
      this.authForm.get('firstName')?.clearValidators();
      this.authForm.get('lastName')?.clearValidators();
      this.authForm.get('confirmPassword')?.clearValidators();
      this.authForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.authForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    } else {
      this.authForm.get('firstName')?.setValidators([Validators.required]);
      this.authForm.get('lastName')?.setValidators([Validators.required]);
      this.authForm.get('confirmPassword')?.setValidators([Validators.required]);
      this.authForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.authForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    }
    this.authForm.updateValueAndValidity();
    setTimeout(() => {
      this.authForm.reset();
      Object.keys(this.authForm.controls).forEach(controlName => {
        const control = this.authForm.get(controlName);
        control?.updateValueAndValidity();
        control?.markAsPristine();
        control?.markAsUntouched();
        control?.setErrors(null);
      });
      this.errorMessage = '';
    });
    this.cdRef.detectChanges();

  }

  async onSubmit(): Promise<void> {
    if (this.authForm.invalid) {
      return;
    }
    const {email, firstName, lastName, password, confirmPassword} = this.authForm.value;
    if (this.isLoginMode) {
      this.errorMessage = await this.profileDataService.getProfileData({email, password});
    } else {
      if (password !== confirmPassword) {
        this.errorMessage = 'Пароли не совпадают!';
        return;
      }
      this.errorMessage = await this.profileDataService.setProfileData({
        email,
        firstName,
        lastName,
        password,
        application: ""
      });
      console.log('Register:', {email, firstName, lastName, password});
    }
  }

  async handleForgotPassword() {
    await this.profileDataService.resetPassword(this.authForm.get('email')?.value);
  }

  redirectToGoogle(mode: 'login' | 'register') {
    const clientId = '641189238289-3ggoqkp39phj60dm34d0ooo86cn8u91h.apps.googleusercontent.com';
    const redirectBase = 'https://rls-auth-service.duckdns.org/authorization/google';
    const scope = 'email%20profile';
    const responseType = 'code';
    const redirectUri = `${redirectBase}/${mode === 'login' ? 'login' : 'registration'}/callback/pimsler`;
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}`;
  }

}
