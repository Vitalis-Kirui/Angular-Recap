import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from 'src/app/Classes/goal';
import { Quote } from 'src/app/Classes/quote';
import { AlertService } from 'src/app/Services/alert.service';
import { GoalService } from 'src/app/Services/goal.service';
import { QuoteService } from 'src/app/Services/quote.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals!: Goal[];

  alertService!: AlertService;

  quote!: Quote;

  //Goals array

  // goals: Goal[] = [

  //   new Goal(1, "Angular", "Master Angular in less than a month's time.", new Date(2022, 8, 30)),
  //   new Goal(2, "Django", "Master Django framework for backend purposes.", new Date(2022, 9, 31)),
  //   new Goal(3, "3 Ps", "Before going fot the next goal, do at least good projects.", new Date(2022, 10, 30)),
  //   new Goal(4, "Laravel", "Learn Laravel PHP frame to be option 2 for backend purposes.", new Date(2022, 11, 31)),
  //   new Goal(5, "React", "Master React in the shortest time possible to be option 2 frontend technology.", new Date(2023, 0, 31))
    
  // ];

  //Toggle description function
  toggleDescription(index: number) {

    this.goals[index].showDescription = !this.goals[index].showDescription;
    
  }

  //passing parameters

  viewDetails(index: number) {
    
    this.router.navigate(["goals/", index]);
    
  }


  //Deleting goal functionality after catching todelete goal event
  deleteGoal(index: number) {
    
    let confirmation = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);

    if (confirmation) {
      this.goals.splice(index, 1);

      //Alert service
      this.alertService.alertMe("The goal has been successfully deleted.")
    }
    
  }

  //Adding goal functionality
  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completionDate = new Date(goal.completionDate);

    this.goals.push(goal)
  }

  constructor(private service: GoalService, private alert : AlertService , private quotesService : QuoteService , private router : Router) { 
    this.goals = this.service.getGoals();
    this.alertService = alert;
  }

  ngOnInit() {

    this.quotesService.makeRequest();
    this.quote = this.quotesService.quote;

  }

}
