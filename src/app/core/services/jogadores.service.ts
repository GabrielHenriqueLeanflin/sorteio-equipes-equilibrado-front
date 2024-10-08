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

  createJogador(group_id, name, level, position) {
    return this.http.post(`${environment.api}/api/criar-jogador`, {group_id, name,level, position})
  }

  updateJogador(group_id, name, level, position) {
    return this.http.put(`${environment.api}/api/atualizar-jogador`, {group_id, name,level, position})
  }

  saveStatus(jogadores) {
    return this.http.put(`${environment.api}/api/save-status`, jogadores);
  }

  excluirJogador(group_id, name, level, position) {
    return this.http.delete(`${environment.api}/api/excluir-jogador`, {
      params: { group_id, name, level, position }
    });
  }
}
