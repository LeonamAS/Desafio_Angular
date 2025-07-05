import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Cabecalho } from '../cabecalho/cabecalho';
import { Rodape } from '../rodape/rodape';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, Cabecalho, Rodape],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
