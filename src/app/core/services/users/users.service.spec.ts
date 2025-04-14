import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { iUser } from "../../../widget/interfaces/user.model";

describe('UsersService', () => {

  let userService: UsersService;

  const userMock: iUser = {
    id: 1,
    nome: 'Fulano Beltrano'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService
      ]
    });
    userService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  describe('adicionarUsuario', () => {
    it('should add an user to the array of users', () => {
      userService.adicionarUsuario(userMock)
      const usuarios = userService.listarUsuarios()
      expect(usuarios).toEqual([userMock])
    })
  })

  describe('removerUsuario', () => {
    it('should remove an user from the array of users', () => {
      userService.adicionarUsuario(userMock)
      userService.removerUsuario(1)
      const usuarios = userService.listarUsuarios()
      expect(usuarios).toEqual([])
    })
  })

  describe('listarUsuarios', () => {
    it('should return the array of users', () => {
      userService.adicionarUsuario(userMock)
      const usuarios = userService.listarUsuarios()
      expect(usuarios).toEqual([userMock])
    })
  })

});
