import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
  colorFondo = signal<string>('#D91818')
  tamano = signal<number>(150)
  tieneLentes = signal<boolean>(false)
  tipoExpresion = signal<number>(1)

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }
  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
    
  }

  toggleLentes() {
    this.tieneLentes.update(flag => !flag);
  }
  cambiarExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }
}
