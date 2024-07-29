import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from "../login/login.component";
import { CadastroComponent } from "../cadastro/cadastro.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatDividerModule, LoginComponent, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
