"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const BibliotecaMusical_1 = require("./BibliotecaMusical");
const Musica_1 = require("./Musica");
class Usuario {
    constructor(nome) {
        this.biblioteca = new BibliotecaMusical_1.BibliotecaMusical();
        this.nome = nome;
    }
    adicionarMusica(musica) {
        this.biblioteca.adicionarMusica(musica);
    }
    listarMusica() {
        this.biblioteca.listarMusica();
    }
    reproduzirMusica(tituloMusica) {
        this.biblioteca.reproduzirMusica(tituloMusica);
    }
}
exports.Usuario = Usuario;
const meuUsuario = new Usuario("Mika");
const musica1 = new Musica_1.Musica("musica1", "Roberto Carlos", 3);
const musica2 = new Musica_1.Musica("musica2", "Beyonce", 2);
const musica3 = new Musica_1.Musica("musica3", "Rihanna", 3);
meuUsuario.adicionarMusica(musica1);
meuUsuario.adicionarMusica(musica2);
meuUsuario.adicionarMusica(musica3);
meuUsuario.listarMusica();
meuUsuario.reproduzirMusica("musica1");
meuUsuario.reproduzirMusica("banana");
console.log(meuUsuario.biblioteca.calcularTotal());
