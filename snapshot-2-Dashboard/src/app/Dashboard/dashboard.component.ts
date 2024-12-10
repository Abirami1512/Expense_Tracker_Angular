import { Component } from '@angular/core';
import { DisplayBoxComponent } from '../Display-box/display-box.component';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expenses.service';
import { IncomeService } from '../services/income.service';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartComponent } from "../charts/charts.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [DisplayBoxComponent, CommonModule, CanvasJSAngularChartsModule, ChartComponent]
})
export class DashboardComponent {
   // Example dummy values to be displayed
  hello = "hello";
  green = "green";

  constructor( private expenseService: ExpenseService, private incomeService: IncomeService ){}

  total_expense = this.expenseService.getTotalExpense();
  get totalExpense() {
    return `Rs ${this.total_expense}`
  }

  total_income = this.incomeService.getTotalIncome();
  get totalIncome() {
    return `Rs ${this.total_income}`
  }

  expense_count = this.expenseService.getExpenseCount();
  income_count = this.incomeService.getIncomeCount();

  total_transactions = this.expense_count + this.income_count;
  get transactions(){
    return `${this.total_transactions}`
  }

  get savings(){
	const savings = this.total_income - this.total_expense;
	return `Rs ${savings}`;
  }

  // console.log(total_expense);

  values = [
    { text: 'Income', value: "Rs.1,00,000", color: 'green' },
    { text: 'Expenses',value: "Rs. 70,000", color: 'red' },
    { text: 'Savings', value: "Rs.25,000",color: 'blue' },
    { text: 'Transactions',value: "10", color: 'orange' }
  ];


  bar_chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Income vs Expenses"
	  },
	  axisX: {
		labelAngle: -90
	  },
	  axisY: {
		title: "Amount"
	  },
    axisY2: {
      title: "Amount"
      },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
	    type: "column",	
	    name: "Income (Rs)",
	    legendText: "Overal Income per month",
	    showInLegend: true, 
	    dataPoints:[
	  	  {label: "Jan", y: 262},
	  	  {label: "Feb", y: 211},
	  	  {label: "March", y: 175},
	  	  {label: "April", y: 137},
	  	  {label: "May", y: 115},
	  	  {label: "June", y: 104},
	  	  {label: "July", y: 97.8},
	  	  {label: "August", y: 60},
	  	  {label: "Spet", y: 23.3},
	  	  {label: "Oct", y: 20.4}
	  ]
	  }, {
	    type: "column",	
	    name: "Expense (Rs)",
	    legendText: "Total amount of money spent per month",
	    axisYType: "secondary",
	    showInLegend: true,
	    dataPoints:[
	  	  {label: "Jan", y: 262},
	  	  {label: "Feb", y: 211},
	  	  {label: "March", y: 175},
	  	  {label: "April", y: 137},
	  	  {label: "May", y: 115},
	  	  {label: "June", y: 104},
	  	  {label: "July", y: 97.8},
	  	  {label: "August", y: 60},
	  	  {label: "Spet", y: 23.3},
	  	  {label: "Oct", y: 20.4}
	  ]
    }]
  }	

  dough_chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Project Cost Breakdown"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Labour" },
		  { y: 10, name: "Legal" },
		  { y: 20, name: "Production" },
		  { y: 15, name: "License" },
		  { y: 23, name: "Facilities" },
		  { y: 17, name: "Taxes" },
		  { y: 12, name: "Insurance" }
		]
	  }]
	}	


}