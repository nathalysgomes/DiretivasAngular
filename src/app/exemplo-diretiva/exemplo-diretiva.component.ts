import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-diretiva',
  templateUrl: './exemplo-diretiva.component.html',
  styleUrls: ['./exemplo-diretiva.component.css'],
})
export class ExemploDiretivaComponent {
    tarefa1 : tarefa = new tarefa("Ir trabalhar")
    tarefa2 : tarefa = new tarefa("Treinar na academia")
    tarefa3 : tarefa = new tarefa("Arrumar a casa")
    tarefa4 : tarefa = new tarefa("Terminar de ler o livro")
    tarefa5 : tarefa = new tarefa("Cozinhar a janta")
    
    tarefas:Array<tarefa> = [this.tarefa1, this.tarefa2, this.tarefa3, this.tarefa4, this.tarefa5]
    
    mudaStatus(tarefa : tarefa){
      tarefa.concluido = true
    } 
    
      }
      class tarefa{
        descricao : string = ""
        concluido : boolean = false
    
        constructor (descricao : string){
          this.descricao = descricao
        }
        
}