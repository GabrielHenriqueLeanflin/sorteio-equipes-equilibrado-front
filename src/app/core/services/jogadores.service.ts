import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JogadoresService {
  private http = inject(HttpClient)

  getAll(id: any) {
    return this.http.get(`${environment.api}/api/jogadores?id=${id}`)
  }

  createJogador(group_id: any, name: any, level: any, position: any) {
    return this.http.post(`${environment.api}/api/criar-jogador`, {group_id, name,level, position})
  }

  updateJogador(group_id: any, name: any, level: any, position: any) {
    return this.http.post(`${environment.api}/api/atualizar-jogador`, {group_id, name,level, position})
  }

  excluirJogador(group_id: any, name: any, level: any, position: any) {
    return this.http.post(`${environment.api}/api/excluir-jogador`, {group_id, name,level, position})
  }
}
