import { Component, OnInit, Input } from '@angular/core';

interface IGuns {
  name: number;
  path: string;
}

enum weapons {
  rock,
  paper,
  scissors
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  @Input() name;
  choiceWeapon: IGuns[] = [
    {
      name: weapons.rock,
      path: '../../assets/img/rock.png'
    },
    {
      name: weapons.paper,
      path: '../../assets/img/paper.png'
    },
    {
      name: weapons.scissors,
      path: '../../assets/img/scissors.png'
    }
  ];
  choiceComp = this.choiceWeapon[0];
  choicePlayer: '';
  timeLeft = 5;
  result = '';
  buttonView = true;
  constructor() { }

  ngOnInit() { }

  startGame() {
    this.startTimer();
  }

  startTimer() {
    this.buttonView = false;
    const interval = setInterval(() => {
      this.randomComp();
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(interval);
        this.resultGame(this.choicePlayer, this.choiceComp.name);
      }
    }, 1000);
  }
  player(choice) {
    this.choicePlayer = choice;
  }

  randomComp() {
    const random = Math.floor(Math.random() * 3);
    this.choiceComp = this.choiceWeapon[random];
  }

  resultGame(player, comp) {
    if (player === comp) {
      this.result = 'Ничья!';
    } else if ((player - comp + 3) % 3 === 1) {
      this.result = this.name + ' - ' + 'вы выйграли!';
    } else if (player === undefined) {
      this.result = this.name + ' - ' + 'вы проирали так как ничего не выбрали!';
    } else {
      this.result = this.name + ' - ' + 'вы проирали!';
    }
  }

  restartGame() {
    this.timeLeft = 5;
    this.result = '';
    this.startTimer();
  }

}
