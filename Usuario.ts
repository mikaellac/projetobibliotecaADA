import { BibliotecaMusical } from "./BibliotecaMusical"
import { Musica } from "./Musica"

export class Usuario {
    nome:string
    biblioteca:BibliotecaMusical=new BibliotecaMusical() 
    
    constructor(nome:string){
        this.nome=nome

    }

    adicionarMusica (musica:Musica){
    this.biblioteca.adicionarMusica(musica)   

    }

    listarMusica (){
    this.biblioteca.listarMusica()

    }

    reproduzirMusica(tituloMusica:string){
    this.biblioteca.reproduzirMusica(tituloMusica)    

    }
}

const meuUsuario=new Usuario("Mika")
const musica1=new Musica("musica1", "Roberto Carlos", 3)
const musica2=new Musica("musica2", "Beyonce", 2)
const musica3=new Musica("musica3", "Rihanna", 3)

meuUsuario.adicionarMusica(musica1)
meuUsuario.adicionarMusica(musica2)
meuUsuario.adicionarMusica(musica3)

meuUsuario.listarMusica()

meuUsuario.reproduzirMusica("musica1")
meuUsuario.reproduzirMusica("banana")


console.log(
    meuUsuario.biblioteca.calcularTotal()
    )







