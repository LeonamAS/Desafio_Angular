import { Component } from '@angular/core';
import { Cabecalho } from "../components/cabecalho/cabecalho";
import { Rodape } from "../components/rodape/rodape";
import { Carrossel } from '../components/carrossel/carrossel';

@Component({
  selector: 'app-dashboard',
  imports: [Cabecalho, Rodape, Carrossel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
