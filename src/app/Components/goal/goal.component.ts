import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [

    new Goal(1, "Angular", "Master Angular in less than a month's time", new Date(2022, 8, 30)),
    new Goal(2, "Django", "Master Django framework for backend purposes.", new Date(2022, 9, 31)),
    new Goal(3, "3 Ps", "Before going fot the next goal, do at least good projects.", new Date(2022, 10, 30)),
    new Goal(4, "Laravel", "Learn Laravel PHP frame to be option 2 for backend purposes", new Date(2022, 11, 31)),
    new Goal(5, "React", "Master React in the shortest time possible to be option 2 frontend technology.", new Date(2023, 0, 31))
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
