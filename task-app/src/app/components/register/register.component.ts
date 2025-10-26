import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterApiResponse } from '../../models/user-api-response';
import { UserAuth } from '../../models/user-auth';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = {} as FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userPassword: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.httpService.register(new UserAuth(this.registerForm.controls["userName"].value, this.registerForm.controls["userPassword"].value))
      .subscribe({
        next: (data) => {
          if (data.hasOwnProperty("register")) {
            let responseData = data as UserRegisterApiResponse;
            if (responseData.register === true) {
              this.router.navigate(['/login']);
            }
          }
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        }
      });
  }
}
