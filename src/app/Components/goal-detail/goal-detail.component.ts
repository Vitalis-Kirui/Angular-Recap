import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Goal } from 'src/app/Classes/goal';
import { GoalService } from 'src/app/Services/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  //Input binding property
  @Input() goal !: Goal | any;

  //Deleting goal functionality
  //Output binding property
  @Output() deletingGoal = new EventEmitter<boolean>();

  deleteGoal(toDelete: boolean) {
    
    this.deletingGoal.emit(toDelete);
    
  }

  constructor(private service : GoalService, private route : ActivatedRoute) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.goal = this.service.getGoal(id);
  }

}
