import { TestBed } from '@angular/core/testing';
import { CheckoutService } from './checkout.service';
import { iProdutosCarrinho } from "../../../widget/interfaces/checkout.model";

describe('CheckoutService', () => {

  let checkoutService: CheckoutService;

  const produtoMock: iProdutosCarrinho = {
    cd_produto: '123',
    nm_produto: 'Produto Mock',
    estoque: 10,
    preco: {
      vlr_ini: 75,
      vlr_fim: 50
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckoutService
      ]
    });
    checkoutService = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(checkoutService).toBeTruthy();
  });

  describe('adicionarProduto', () => {
    it('should add a product to the array of products', () => {
      checkoutService.adicionarProduto(produtoMock)
      const produtos = checkoutService.listarProdutos()
      expect(produtos).toEqual([produtoMock])
    })
  })

  describe('removerProduto', () => {
    it('should remove a product from the array of products', () => {
      checkoutService.adicionarProduto(produtoMock)
      checkoutService.removerProduto('123')
      const produtos = checkoutService.listarProdutos()
      expect(produtos).toEqual([])
    })
  })

  describe('listarProdutos', () => {
    it('should return the array of products', () => {
      checkoutService.adicionarProduto(produtoMock)
      const produtos = checkoutService.listarProdutos()
      expect(produtos).toEqual([produtoMock])
    })
  })

});
