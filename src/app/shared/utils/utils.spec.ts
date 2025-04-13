import { title } from './title';
import { validarCPF } from "./validar-cpf";

describe('utils', () => {

  describe('title', () => {
    it('should return a string with the first letter capitalized', () => {
      const funcionario = 'fulano'
      expect(title(funcionario)).toBe('Fulano')
    })
  })

  describe('validar-cpf', () => {
    it('should return false after checking an invalid CPF', () => {
      const cpfInvalido = '111.222.333-44'
      expect(validarCPF(cpfInvalido)).toBe(false)
    })
    it('should return true after checking a valid CPF', () => {
      const cpfValido = '018.826.100-16'
      expect(validarCPF(cpfValido)).toBe(true)
    })
  })

})