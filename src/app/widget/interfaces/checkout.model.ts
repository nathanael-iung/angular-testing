export interface iPrecoProduto {
  vlr_ini: number;
  vlr_fim: number;
}

export interface iProdutosCarrinho {
  cd_produto: string;
  nm_produto: string;
  estoque: number;
  preco: iPrecoProduto;
}