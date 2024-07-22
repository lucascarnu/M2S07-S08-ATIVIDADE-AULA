import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// No angular tudo é Component. @Component é o decorator (anotaçõ) que indica isso
@Component({
  selector: 'app-root', // esse seletor é o que está no index.html: <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // ubicación de la plantilla del componente app
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Aquí se implementa o comportamento do html
  title = 'atividades';
}
