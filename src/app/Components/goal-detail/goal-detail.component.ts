import { Component, OnInit, Input } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  //Input binding property
  @Input() goal !: Goal

  constructor() { }

  ngOnInit(): void {
  }

}
