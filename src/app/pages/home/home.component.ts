import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from "../login/login.component";
import { CadastroComponent } from "../cadastro/cadastro.component";
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, MatDividerModule, LoginComponent, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public showCadastro = false;

  constructor() {}

  ngOnInit(): void {

  }

  showCardCadastro(event: boolean) {
    this.showCadastro = event;
  }
}
