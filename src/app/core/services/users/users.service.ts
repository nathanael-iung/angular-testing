import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { iUser } from "../../../widget/interfaces/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usuarios$ = new BehaviorSubject<iUser[]>([])

  adicionarUsuario(usuario: iUser){
    this.usuarios$.next([...this.usuarios$.getValue(), usuario])
  }

  removerUsuario(id: number) {
    const usuariosAtualizados = this.usuarios$.getValue().filter(u => u.id !== id)
    this.usuarios$.next(usuariosAtualizados)
  }

  listarUsuarios() {
    return this.usuarios$.getValue()
  }

}
