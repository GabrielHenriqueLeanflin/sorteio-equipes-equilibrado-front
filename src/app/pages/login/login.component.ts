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
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit(event: Event){
    event.preventDefault();
    this.usersService.login(this.loginForm.value).subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error)
      }
    )
  }

  clickCadastro(event: boolean) {
    this.showCardCadastro.emit(event)
  }
}
