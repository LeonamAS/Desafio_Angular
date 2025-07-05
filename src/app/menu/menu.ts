import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  imports: [MatSidenavModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
