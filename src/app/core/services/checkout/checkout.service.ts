import { inject, Injectable } from '@angular/core';
import { iProdutosCarrinho } from "../../../widget/interfaces/checkout.model";
import { title } from "../../../shared/utils/title";
import { UtilsService } from "../../../shared/services/utils/utils.service";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private produtos: iProdutosCarrinho[] = []

  utilsService = inject(UtilsService)

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

}
