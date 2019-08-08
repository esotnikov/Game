import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  title = 'Rock Paper Scissors Game';
  goToGame = false;

  routeGame() {
    this.goToGame = true;
  }
}
