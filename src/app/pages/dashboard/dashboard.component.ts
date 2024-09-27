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
  /** Injects */
  public usersService = inject(AuthService);
  public jogadoresService = inject(JogadoresService)

  /** Variáveis */
  public id: any;
  public jogadores: any;

  async ngOnInit() {
    this.getIdUser();
    await this.loadJogadores();

    console.log(this.jogadores)
  }

  getIdUser() {
    this.id = localStorage.getItem('id')
  }

  sortearJogadores(){

  }

  async loadJogadores() {
    this.jogadores = await this.getAllJogadores()
  }
  getAllJogadores(): Promise<any> {
    return new Promise(resolve => this.jogadoresService.getAll(this.id).subscribe(
      res => {
        resolve(res)
      }, error => {
        console.error(error)
      }
    ));
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


