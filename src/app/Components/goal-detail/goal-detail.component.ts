import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  //Input binding property
  @Input() goal !: Goal;

  //Deleting goal functionality
  //Output binding property
  @Output() deletingGoal = new EventEmitter<boolean>();

  deleteGoal(toDelete: boolean) {
    
    this.deletingGoal.emit(toDelete);
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
