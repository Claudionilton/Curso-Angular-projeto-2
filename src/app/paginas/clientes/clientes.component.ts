import { Component, inject, OnInit } from '@angular/core';
import { ICliente } from '../../interfaces/icliente';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})

export class ClientesComponent implements OnInit{

  public clientes: Array<ICliente> = []
  #http = inject(HttpClient)

  ngOnInit(): void {
    this.clientes = this.getClientes()
  /*  this.clientes.push({id: 1, name: {firstname: 'Claudionilton',lastname:'Júnior'}, email: 'claudionilton.junior@gmail.com'})
    this.clientes.push({id: 2, name: {firstname: 'Jose',lastname:'Nascimento'}, email: 'jose.nascimento@gmail.com'})
    this.clientes.push({id: 3, name: {firstname: 'Paula',lastname:'Gabriela'}, email: 'paula.gabriela@gmail.com'})
    this.clientes.push({id: 4, name: {firstname: 'Saulo',lastname:'Gabriel'}, email: 'saulo.gabriel@gmail.com'})
  */
    }
  private getClientes(): Array<ICliente> {

    let clientes: ICliente[] = []
    let url: string = 'https://fakestoreapi.com/users'
    let req = this.#http.get<Array<ICliente>>(url)
    let sub = {
      next(dados: Array<ICliente>) {
        console.log(`next`,dados)
        dados.forEach((el: ICliente) => {
          clientes.push({id: el.id, name: el.name, email: el.email})
        })
        console.log('clientes :>> ', clientes);
      },
      error(err: any) {
        console.log(`error`, err)
      },
      complete() {
        console.log(`Complete`)
      }
    }

    req.subscribe(sub)

    return clientes
  }
}
