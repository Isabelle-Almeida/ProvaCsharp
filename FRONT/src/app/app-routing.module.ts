import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarTarefaComponent } from "./pages/tarefa/listar-tarefa/listar-tarefa.component";


const routes: Routes = [
  {
    path: "",
    component: ListarTarefaComponent,
  },
  {
    path: "pages/tarefa/listar",
    component: ListarTarefaComponent,
  },

  // {
  //   path: "pages/produto/alterar/:id",
  //   component: AlterarProdutoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
