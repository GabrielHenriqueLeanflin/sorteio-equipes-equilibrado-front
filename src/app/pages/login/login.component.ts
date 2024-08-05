import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, Router  } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, RouterLink, MatFormFieldModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  @Output() showCardCadastro = new EventEmitter;
  loginForm: FormGroup = new FormGroup({});

  public userCache: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.usersService.getUsersList().subscribe(res => {
      this.userCache = res
    })
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit(event: Event){
    event.preventDefault();

    if(this.loginForm.valid) {

      const email = this.loginForm.value.email
      const senha = this.loginForm.value.password

      this.usersService.autenticar(email, senha).subscribe({
        next: (value) => {
          console.log(value);
          this.router.navigateByUrl('/dashboard')
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  clickCadastro(event: boolean) {
    this.showCardCadastro.emit(event)
  }
}
