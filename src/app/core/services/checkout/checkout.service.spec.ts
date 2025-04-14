import { TestBed } from '@angular/core/testing';
import { CheckoutService } from './checkout.service';
import { iProdutosCarrinho } from "../../../widget/interfaces/checkout.model";
import { UtilsService } from "../../../shared/services/utils/utils.service";

describe('CheckoutService', () => {

  let checkoutService: CheckoutService;
  let utilsService: UtilsService;

  const produtoMock: iProdutosCarrinho = {
    cd_produto: '123',
    nm_produto: 'produto mock',
    estoque: 10,
    preco: {
      vlr_ini: 75,
      vlr_fim: 50
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckoutService,
        UtilsService
      ]
    });
    checkoutService = TestBed.inject(CheckoutService);
    utilsService = TestBed.inject(UtilsService);
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

  describe('getNmProduto', () => {
    it('should check if utilsService title have been called with the right parameter', () => {
      jest.spyOn(utilsService, 'title').mockReturnValue('Produto mock')
      checkoutService.adicionarProduto(produtoMock)
      checkoutService.getNmProduto('123')
      expect(utilsService.title).toHaveBeenCalledWith(produtoMock.nm_produto)
    })
  })

});
