import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  submitted: boolean = false;
  formValues = {
    email: '',
    password: '',
  };
  handleSubmiForm(form: any) {
    this.submitted = true;
    console.log(form);
  }
}
