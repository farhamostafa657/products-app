import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  submitted: boolean = false;
  registForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registForm = this.fb.group(
      {
        registerName: ['', Validators.required],
        registerEmail: [
          '',
          Validators.required,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        ],
        registerUserName: [
          '',

          [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)],
        ],
        registerPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%$#*]).{8,}$/
            ),
          ],
        ],
        registerConfirmPassword: ['', Validators.required],
      },
      {
        validator: confirmMatchedPasswords(
          'registerPassword',
          'registerConfirmPassword'
        ),
      }
    );
  }
  get formControl() {
    return this.registForm.controls;
  }

  handleSubmitForm() {
    this.submitted = true;
  }
}

export function confirmMatchedPasswords(
  passwordKey: string,
  confirmPasswordKey: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get(passwordKey)?.value;
    const confirmPassword = formGroup.get(confirmPasswordKey)?.value;
    if (password != confirmPassword) {
      return { passwordMisMatch: true };
    }
    return null;
  };
}

// TS => Import ReactiveFormsModule
// TS => init. FormGroup = ({ formControl('', [Validators])  })
// HTML => <form [formGroup]="form" (ngSubmit)="">
// HTML => <field formControlName="formControl">
