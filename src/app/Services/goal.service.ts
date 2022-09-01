import { Injectable } from '@angular/core';
import { Goals } from '../Backend/Goal-List';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  //Get goals function
  getGoals() {
    return Goals;
  }

//Getting a single goal function
  getGoal(index: number) {
    for (let goal of Goals) {
      if (goal.id == index) {
        return goal;
      }
    }
    return
  }

  constructor() { }
}
