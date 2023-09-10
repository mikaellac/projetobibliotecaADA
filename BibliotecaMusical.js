"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaMusical = void 0;
class BibliotecaMusical {
    constructor() {
        this.listademusicas = [];
    }
    adicionarMusica(musicapraadicionar) {
        this.listademusicas.push(musicapraadicionar);
    }
    listarMusica() {
        this.listademusicas.forEach(m => {
            console.log(m);
        });
    }
    reproduzirMusica(tituloMusica) {
        const musicaReproduzida = this.listademusicas.find(musicaAtual => {
            return musicaAtual.getTitulo() === tituloMusica;
        });
        console.log(musicaReproduzida);
    }
    calcularTotal() {
        let total = 0;
        this.listademusicas.forEach(musicaAtual => {
            total += musicaAtual.getDuracao();
        });
        return total;
    }
}
exports.BibliotecaMusical = BibliotecaMusical;
