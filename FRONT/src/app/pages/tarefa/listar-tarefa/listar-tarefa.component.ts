import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Tarefa } from "src/app/models/tarefa.models";

@Component({
  selector: "app-listar-tarefa",
  templateUrl: "./listar-tarefa.component.html",
  styleUrls: ["./listar-tarefa.component.css"],
})
export class ListarTarefaComponent {
  colunasTabela: string[] = [
    "id",
    "titulo",
    "descricao",
    "categoria",
    "criadoEm",
    // "alterar",
  ];

  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.client
    .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
    .subscribe({
      //funcionou
      next: (tarefas) => {
        this.tarefas = tarefas;
        console.log(tarefas);
      },
      // não funcionou
      error: (erro) => {
        console.log(erro);
      }
    })
  }

}
