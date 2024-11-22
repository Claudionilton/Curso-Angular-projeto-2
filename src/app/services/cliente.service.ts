import { inject, Injectable } from '@angular/core';
import { ICliente } from '../interfaces/icliente';
import { HttpClient } from '@angular/common/http';
import { api } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  #http = inject(HttpClient)
  private url: string = api.urlbase
  private apiclientes: string = `${this.url}${api.rotausers}`

  constructor() { }

  public getClientes(): Array<ICliente> {

    let clientes: ICliente[] = []
    let url: string = this.apiclientes
    let req = this.#http.get<Array<ICliente>>(url)
    let sub = {
      next(dados: Array<ICliente>) {
        //console.log(`next`,dados)
        dados.forEach((el: ICliente) => {
          clientes.push({id: el.id, name: el.name, email: el.email})
        })
        //console.log('clientes :>> ', clientes);
      },
      error(err: any) {
        console.log(`error`, err)
      },
      complete() {
        //console.log(`Complete`)
      }
    }

    req.subscribe(sub)

    return clientes
  }
}
