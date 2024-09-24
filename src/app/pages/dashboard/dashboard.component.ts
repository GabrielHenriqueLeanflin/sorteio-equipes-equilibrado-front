import {Component, inject, OnInit} from '@angular/core';
import { CardSorteadoComponent } from "./card-sorteado/card-sorteado.component";
import { CommonModule } from '@angular/common';
import {AuthService} from "../../core/services/auth.service";
import {JogadoresService} from "../../core/services/jogadores.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardSorteadoComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public usersService = inject(AuthService);
  public jogadoresService = inject(JogadoresService)

  public id: any;

  ngOnInit() {
    this.id = localStorage.getItem('id')
    this.getAllJogadores();
  }

  getAllJogadores() {
    this.jogadoresService.getAll(this.id).subscribe( (res) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }

  selectAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const checkboxes = document.querySelectorAll<HTMLInputElement>('.checkbox-row');
    checkboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
    });
  }

  sair() {
    this.usersService.logout();
  }
}


