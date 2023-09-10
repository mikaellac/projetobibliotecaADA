export class Musica{
    private titulo:string
    private artista:string
    private duracao:number

    constructor(titulo:string,artista:string,duracao:number){
        this.titulo=titulo
        this.artista=artista
        this.duracao=duracao
    }

    getTitulo():string{
        return this.titulo
    }

    getArtista():string{
        return this.artista
    }

    getDuracao():number{
        return this.duracao
    }

}
