import { Injectable } from '@angular/core';
import { Obra } from './obra.model';

@Injectable({
  providedIn: 'root',
})
export class ObraService {
  private obras: Obra [] = [
    { id: 1, nome: 'Obra Gustavo', etapa: 'Contra-marco' },
    { id: 2, nome: 'Obra Nicoly', etapa: 'Contra-marco' },
    { id: 3, nome: 'Obra Josefa', etapa: 'Instalação' },
    { id: 4, nome: 'Obra Ana', etapa: 'Finalizada' },
  ]

  listar(): Obra[]{
    return this.obras;
  }
}
