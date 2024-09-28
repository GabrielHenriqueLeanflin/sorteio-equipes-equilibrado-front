import {Component, inject, OnInit} from '@angular/core';
import { CardSorteadoComponent } from "./card-sorteado/card-sorteado.component";
import { CommonModule } from '@angular/common';
import {AuthService} from "../../core/services/auth.service";
import {JogadoresService} from "../../core/services/jogadores.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError} from "@angular/material/form-field";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardSorteadoComponent, CommonModule, ReactiveFormsModule, MatError],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  /** Injects */
  public usersService = inject(AuthService);
  public jogadoresService = inject(JogadoresService)
  public formBuilder = inject(FormBuilder);


  /** Variáveis */
  public id: any;
  public userCache: any;
  public formSorteio: any;
  public formSorteioInvalid = false;

  async ngOnInit() {
    this.createForm();
    this.getIdUser();
    await this.loadJogadores();
  }

  createForm() {
    this.formSorteio = this.formBuilder.group({
      numero_opcoes: ['', [Validators.required]],
      numero_equipes: ['', [Validators.required]],
    })
  }

  getIdUser() {
    this.id = localStorage.getItem('id')
  }

  sortear() {
    if (this.formSorteio.valid){
      let numeroOpcoes = this.formSorteio.get('numero_opcoes').value;
      let opcoes:any = []

      for (let i = 0; i < numeroOpcoes; i++) {
        opcoes.push(this.dividiEquipes());
      }
      console.log(opcoes)

      return opcoes;
    } else {
      this.formSorteioInvalid = true;
    }
  }

  dividiEquipes() {
    // Quantidade de equipes
    let numero_equipes = this.formSorteio.get('numero_equipes').value;
    let groupTeam:any = [];

    for (let i = 0; i < numero_equipes; i++) {
      let team = []
      groupTeam.push(team)
    }

    // Jogadores Bons
    let playerBom = this.userCache.jogadores.filter((item) => item.level >= 9);
    playerBom.sort(() => Math.random() - 0.5);

    // Jogadores Medianos
    let playerMediado = this.userCache.jogadores.filter((item) => item.level <= 8);
    playerMediado.sort(() => Math.random() - 0.5);

    playerBom.forEach((jogador) => {
      const menorTeam = groupTeam.sort((a, b) => a.length - b.length)[0];
      menorTeam.push(jogador);
    });

    playerMediado.forEach((jogador) => {
      const menorTeam = groupTeam.sort((a, b) => a.length - b.length)[0];
      menorTeam.push(jogador);
    });

    return groupTeam;
  }

  async loadJogadores() {
    this.userCache = await this.getAllJogadores()
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


