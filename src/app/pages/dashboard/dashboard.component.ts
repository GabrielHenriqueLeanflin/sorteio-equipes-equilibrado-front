import {Component, inject} from '@angular/core';
import { CardSorteadoComponent } from "./card-sorteado/card-sorteado.component";
import { CommonModule } from '@angular/common';
import {UsersService} from "../../core/services/users.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardSorteadoComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public usersService = inject(UsersService);

  public teste: boolean = true;

  constructor() { }



  selectAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const checkboxes = document.querySelectorAll<HTMLInputElement>('.checkbox-row');
    checkboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
    });
  }

  sair() {
    this.usersService.logout();
  }
}


