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

export interface iRequestListarProdutos {
  status: boolean;
  produtos: iProdutosCarrinho[];
}

export interface iRequestAdicionarProduto {
  status: boolean;
  produto: iProdutosCarrinho;
}