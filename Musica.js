"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Musica = void 0;
class Musica {
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
    getTitulo() {
        return this.titulo;
    }
    getArtista() {
        return this.artista;
    }
    getDuracao() {
        return this.duracao;
    }
}
exports.Musica = Musica;
