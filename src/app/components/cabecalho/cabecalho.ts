import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cabecalho',
  imports: [CommonModule, NgbCollapseModule, NgbDropdownModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css'
})
export class Cabecalho {
  constructor(private router: Router) { }

  onLogin(): void {
    this.router.navigate(['/login'])
  }
  onTestedrive(): void {
    this.router.navigate(['/teste-drive'])
  }
  onDashboard(): void {
    this.router.navigate(['/dashboard'])
  }
  onHome(): void {
    this.router.navigate(['/home'])
  }
}
