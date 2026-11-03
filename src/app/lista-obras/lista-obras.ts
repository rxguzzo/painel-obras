import { Component } from '@angular/core';

interface Obra {
  id: number;
  nome: string;
  etapa: string;
}
@Component({
  selector: 'app-lista-obras',
  imports: [],
  templateUrl: './lista-obras.html',
  styleUrl: './lista-obras.css',
})

export class ListaObras {
  obras: Obra[] = [
    { id: 1, nome: 'Obra Gustavo', etapa: 'Contra-marco' },
    { id: 2, nome: 'Obra Nicoly', etapa: 'Contra-marco' },
    { id: 3, nome: 'Obra Josefa', etapa: 'Instalação' },
    { id: 4, nome: 'Obra Ana', etapa: 'Finalizada' },
  ];
}
