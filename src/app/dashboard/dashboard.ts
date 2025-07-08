import { Component } from '@angular/core';
import { Cabecalho } from "../components/cabecalho/cabecalho";
import { Rodape } from "../components/rodape/rodape";

@Component({
  selector: 'app-dashboard',
  imports: [Cabecalho, Rodape],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
