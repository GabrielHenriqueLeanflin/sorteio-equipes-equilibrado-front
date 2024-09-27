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
  public name: any;
  public jogadores: any;

  async ngOnInit() {
    this.getIdUser();
    await this.loadJogadores();
    this.sortearJogadores();
    this.sortearDuasOpcoesDeJogadores();
  }

  getIdUser() {
    this.id = localStorage.getItem('id')
    this.name = localStorage.getItem("user")
  }

  sortearDuasOpcoesDeJogadores() {
    // Gera duas opções de times
    const opcao1 = this.sortearJogadores(); // Primeira opção
    const opcao2 = this.sortearJogadores(); // Segunda opção

    // Array com as duas opções de equipes
    const opcoes = [opcao1, opcao2];

    // Exibe as duas opções
    console.log(opcoes);

    return opcoes;
  }

  sortearJogadores() {
    let time1: any[] = [];
    let time2: any[] = [];
    let time3: any[] = [];

    // Jogadores 9 e 10
    let playerBom = this.jogadores.jogadores.filter((item: { level: number; }) => item.level >= 9);
    playerBom.sort(() => Math.random() - 0.5);

    // Jogadores medianos
    let playerMediado = this.jogadores.jogadores.filter((item: { level: number; }) => item.level <= 8);
    playerMediado.sort(() => Math.random() - 0.5);

    // Distribuir jogadores 9 e 10 de maneira equilibrada
    playerBom.forEach((jogador: any) => {
      const smallestTeam = [time1, time2, time3].sort((a, b) => a.length - b.length)[0];
      smallestTeam.push(jogador);
    });

    // Distribuir jogadores medianos de maneira equilibrada
    playerMediado.forEach((jogador: any) => {
      const smallestTeam = [time1, time2, time3].sort((a, b) => a.length - b.length)[0];
      smallestTeam.push(jogador);
    });

    return [time1, time2, time3];
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

  sair() {
    this.usersService.logout();
  }
}


