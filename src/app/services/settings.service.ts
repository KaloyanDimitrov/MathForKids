import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

    selectedTable = 1;
    numberOfExercises = 10;
    timeLimit = 60;

    constructor() {

    }

}
