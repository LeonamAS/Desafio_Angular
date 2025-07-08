import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Cabecalho } from '../components/cabecalho/cabecalho';
import { Rodape } from '../components/rodape/rodape';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, Cabecalho, Rodape],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
