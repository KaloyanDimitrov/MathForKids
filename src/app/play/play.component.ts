import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '../services/settings.service';

export enum GameStates {
  INIT,
  STARTED,
  FINISHED
}

export enum PlayMode {
  RANDOM,
  SELECTED_TABLE
}

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

  firstNumber: number;
  secondNumber: number;

  resultFormControl = new FormControl();

  score = 0;

  table: number;
  timeLeft = 60;

  currentTaskNumber = 1;
  totalTasksNumber = 10;

  gameStates = GameStates;
  gameState: GameStates = GameStates.INIT;

  playModes = PlayMode;
  playMode: PlayMode = PlayMode.SELECTED_TABLE;

  timerInterval: NodeJS.Timer;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.firstNumber = this.settingsService.selectedTable;
    this.timeLeft = this.settingsService.timeLimit;
  }


  submitResult() {
    if (this.resultFormControl.value === this.firstNumber * this.secondNumber) {
      this.score++;
    }

    this.resultFormControl.reset();

    if (this.currentTaskNumber < this.totalTasksNumber) {
      if (this.playMode === this.playModes.SELECTED_TABLE) {
        this.secondNumber = this.numbers.splice((Math.random() * 100) % this.numbers.length, 1)[0];
      } else if (this.playMode === this.playModes.RANDOM) {
        this.firstNumber = Math.ceil((Math.random() * 10));
        this.secondNumber = Math.ceil((Math.random() * 10));
      }
      this.currentTaskNumber++;
    } else {
      this.endGame();
    }

  }

  startRegularGame() {
    this.playMode = this.playModes.SELECTED_TABLE;
    this.startGame();
  }

  startRandomGame() {
    this.playMode = this.playModes.RANDOM;
    this.totalTasksNumber = this.settingsService.numberOfExercises;
    this.startGame();
  }

  startGame() {
    this.gameState = this.gameStates.STARTED;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.endGame();
      }
    }, 1000);

    if (this.playMode === this.playModes.SELECTED_TABLE) {
      this.firstNumber = Math.ceil((Math.random() * 10));
      this.secondNumber = this.numbers.splice((Math.random() * 100) % this.numbers.length, 1)[0];
    } else if (this.playMode === this.playModes.RANDOM) {
      this.firstNumber = Math.ceil((Math.random() * 10));
      this.secondNumber = Math.ceil((Math.random() * 10));
    }
  }

  endGame() {
    this.gameState = this.gameStates.FINISHED;
    clearInterval(this.timerInterval);
  }

}
