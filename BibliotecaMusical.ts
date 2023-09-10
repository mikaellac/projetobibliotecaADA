import { Musica } from "./Musica";

 
export class BibliotecaMusical{
    
    listademusicas:Musica[]=[]
   
    adicionarMusica (musicapraadicionar:Musica) {
      this.listademusicas.push(musicapraadicionar)   
    }

    listarMusica () {
        this.listademusicas.forEach(m=>{
        console.log (m)    
        }) 
        
    }

    reproduzirMusica (tituloMusica:string) {
        const musicaReproduzida = this.listademusicas.find(musicaAtual=>{        
        return musicaAtual.getTitulo()===tituloMusica
        })
        console.log (musicaReproduzida)
        
    }

    calcularTotal ():number{
        let total = 0
        this.listademusicas.forEach(musicaAtual=>{
        total+=musicaAtual.getDuracao()    

        })

        return total
    }
    
}
