import { Component, inject, OnInit } from '@angular/core';
import { ICliente } from '../../interfaces/icliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})

export class ClientesComponent implements OnInit{

  public clientes: Array<ICliente> = []
  #clienteService = inject(ClienteService)

  ngOnInit(): void {
    this.clientes = this.#clienteService.getClientes()
  /*  this.clientes.push({id: 1, name: {firstname: 'Claudionilton',lastname:'Júnior'}, email: 'claudionilton.junior@gmail.com'})
    this.clientes.push({id: 2, name: {firstname: 'Jose',lastname:'Nascimento'}, email: 'jose.nascimento@gmail.com'})
    this.clientes.push({id: 3, name: {firstname: 'Paula',lastname:'Gabriela'}, email: 'paula.gabriela@gmail.com'})
    this.clientes.push({id: 4, name: {firstname: 'Saulo',lastname:'Gabriel'}, email: 'saulo.gabriel@gmail.com'})
  */
    }
  
}
