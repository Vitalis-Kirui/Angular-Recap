import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  // New goal blueprint
  newGoal = new Goal(0, "", "", new Date());
  
  //Emitting goal from form
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal() {
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
