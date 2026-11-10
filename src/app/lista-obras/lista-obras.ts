import { Component, inject } from '@angular/core';
import { Obra } from '../obra.model'; //Obra é o modelo (o formato dos dados) e ObraService é o serviço (a lógica)
import { ObraService } from '../obra';

@Component({
  selector: 'app-lista-obras',
  imports: [],
  templateUrl: './lista-obras.html',
  styleUrl: './lista-obras.css',
})
export class ListaObras {
  private obraService = inject(ObraService);
  obras: Obra[] = this.obraService.listar();
}
