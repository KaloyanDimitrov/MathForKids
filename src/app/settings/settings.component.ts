import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

  tableFormControl = new FormControl();
  numberOfExercisesFormControl = new FormControl();
  timeLimitFormControl = new FormControl();

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.tableFormControl.setValue(this.settingsService.selectedTable);
    this.numberOfExercisesFormControl.setValue(this.settingsService.numberOfExercises);
    this.timeLimitFormControl.setValue(this.settingsService.timeLimit);
  }

  ngOnDestroy(): void {
    this.settingsService.selectedTable = this.tableFormControl.value;
    this.settingsService.numberOfExercises = this.numberOfExercisesFormControl.value;
    this.settingsService.timeLimit = this.timeLimitFormControl.value;
  }

}
