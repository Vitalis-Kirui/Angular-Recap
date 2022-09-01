import { Injectable } from '@angular/core';
import { Goals } from '../Backend/Goal-List';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals() {
    return Goals;
  }

  constructor() { }
}
