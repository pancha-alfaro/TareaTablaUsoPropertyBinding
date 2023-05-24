import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  Articulos2 = [
    { title: 'Poker', pais: 'Colombia', contenido: 4.5 },
    { title: 'Baltica', pais: 'Chile', contenido: 5.8 },
    { title: 'Costeña', pais: 'Colombia', contenido: 3.7 },
    { title: 'Sol', pais: 'Mexico', contenido: 4.5 },
    { title: 'Quilmes', pais: 'Argentina', contenido: 4.8 }
  ];
}