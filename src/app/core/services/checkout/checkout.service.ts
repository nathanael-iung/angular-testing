import { Injectable } from '@angular/core';
import { iProdutosCarrinho } from "../../../widget/interfaces/checkout.model";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private produtos: iProdutosCarrinho[] = []

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

}
