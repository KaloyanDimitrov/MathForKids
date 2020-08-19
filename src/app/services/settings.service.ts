import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SettingsService {

    selectedTable = 1;
    numberOfExercises = 10;
    timeLimit = 60;

    isLoggedIn = new BehaviorSubject(false);

    constructor() {

    }

}
