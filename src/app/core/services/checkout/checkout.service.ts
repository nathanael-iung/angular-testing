import { inject, Injectable } from '@angular/core';
import { iProdutosCarrinho, iRequestAdicionarProduto, iRequestListarProdutos } from "../../../widget/interfaces/checkout.model";
import { title } from "../../../shared/utils/title";
import { UtilsService } from "../../../shared/services/utils/utils.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private produtos: iProdutosCarrinho[] = []

  utilsService = inject(UtilsService)
  http = inject(HttpClient)

  private apiUrl = 'http://localhost:8001/'

  adicionarProduto(produto: iProdutosCarrinho): void {
    this.produtos = [...this.produtos, produto]
  }

  removerProduto(cd_produto: string): void {
    const produtosAtualizados = this.produtos.filter((p: iProdutosCarrinho) => p.cd_produto !== cd_produto)
    this.produtos = produtosAtualizados
  }

  listarProdutos(): iProdutosCarrinho[] {
    return this.produtos
  }

  getNmProduto(cd_produto: string): string {
    const produto = this.produtos.find((produto: iProdutosCarrinho) => produto.cd_produto === cd_produto)
    if(!produto || !Object.keys(produto)?.length)
      return ''
    return this.utilsService.title(produto.nm_produto)
  }

  buscarProdutosCarrinho(): Observable<iRequestListarProdutos> {
    return this.http.get<iRequestListarProdutos>(`${this.apiUrl}produto/buscar`)
  }

  adicionarProdutoCarrinho(produto: iProdutosCarrinho): Observable<iRequestAdicionarProduto> {
    return this.http.post<iRequestAdicionarProduto>(`${this.apiUrl}produto/adicionar`, {produto})
  }

}
