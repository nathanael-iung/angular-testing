import { TestBed } from '@angular/core/testing';
import { CheckoutService } from './checkout.service';
import { iProdutosCarrinho, iRequestAdicionarProduto } from "../../../widget/interfaces/checkout.model";
import { UtilsService } from "../../../shared/services/utils/utils.service";
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('CheckoutService', () => {

  let checkoutService: CheckoutService;
  let utilsService: UtilsService;
  let httpTestingController: HttpTestingController;

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
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    checkoutService = TestBed.inject(CheckoutService);
    utilsService = TestBed.inject(UtilsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

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

  describe('buscarProdutosCarrinho', () => {
    it('should return a list of products in my cart', () => {
      let produtos: iProdutosCarrinho[] | undefined
      checkoutService.buscarProdutosCarrinho().subscribe((response) => {
        produtos = response?.produtos
      })
      const request = httpTestingController.expectOne('http://localhost:8001/produto/buscar')
      request.flush({status: true, produtos: [produtoMock]})
      expect(produtos).toEqual([produtoMock])
    })
  })

  describe('adicionarProdutoCarrinho', () => {
    it('should add a new product to my cart', () => {
      let produto: iProdutosCarrinho | undefined
      checkoutService.adicionarProdutoCarrinho(produtoMock).subscribe((response) => {
        produto = response?.produto
      })
      const request = httpTestingController.expectOne('http://localhost:8001/produto/adicionar')
      request.flush({status: true, produto: produtoMock})
      expect(produto).toEqual(produtoMock)
    })
    it('should have the right method and the right body', () => {
      let produtoResponse: iProdutosCarrinho | undefined
      const produto = produtoMock
      checkoutService.adicionarProdutoCarrinho(produtoMock).subscribe((response) => {
        produtoResponse = response?.produto
      })
      const request = httpTestingController.expectOne('http://localhost:8001/produto/adicionar')
      request.flush({status: true, produto: produtoMock})
      expect(request.request.method).toEqual('POST')
      expect(request.request.body).toEqual({produto})
    })
  })

});
