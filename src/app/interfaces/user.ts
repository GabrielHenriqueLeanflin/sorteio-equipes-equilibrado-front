export interface User {
        id: number,
        email: string,
        senha: string,
        jogadores: {nome: string, nivel_habilidade: string, status: string}
}
