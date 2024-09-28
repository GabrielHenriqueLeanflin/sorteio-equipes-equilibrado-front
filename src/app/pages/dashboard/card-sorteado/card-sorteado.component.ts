import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-card-sorteado',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-sorteado.component.html',
  styleUrl: './card-sorteado.component.scss'
})
export class CardSorteadoComponent {
  @Input() equipesSorteadas: any;
  @Output() equipesSorteadas2 = new EventEmitter()

  voltar() {
    this.equipesSorteadas2.emit(false)
  }
}
