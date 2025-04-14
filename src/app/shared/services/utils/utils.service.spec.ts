import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('utils', () => {

    describe('title', () => {
      it('should return a string with the first letter capitalized', () => {
        const funcionario = 'fulano'
        expect(service.title(funcionario)).toBe('Fulano')
      })
    })

    describe('validar-cpf', () => {
      it('should return false after checking an invalid CPF', () => {
        const cpfInvalido = '111.222.333-44'
        expect(service.validarCPF(cpfInvalido)).toBe(false)
      })
      it('should return true after checking a valid CPF', () => {
        const cpfValido = '018.826.100-16'
        expect(service.validarCPF(cpfValido)).toBe(true)
      })
    })

  })
});
