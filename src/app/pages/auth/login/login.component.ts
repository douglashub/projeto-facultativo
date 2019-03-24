import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'hfmh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login({ value, valid }): void {
    console.log(value, valid);

    if (valid) {
      this.authService.login(value);
      this.router.navigate(['home']);
    }
  }

  getErrorMessage(inputName: string): string {
    const input = this.loginForm.get(inputName);

    return input.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {}
}
