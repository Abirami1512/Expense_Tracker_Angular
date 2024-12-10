import { Component } from '@angular/core';;
import { ExpenseService } from '../services/expenses.service';
import { IncomeService } from '../services/income.service';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
  imports: [CanvasJSAngularChartsModule]
})
export class ChartComponent {
 

  constructor( private expenseService: ExpenseService, private incomeService: IncomeService ){}

  bar_chartOptions = {
	  animationEnabled: true,
      responsive: true,
      height: 500,
      width: 700,
	  cornerRadius: 10,
	  dataPointMaxWidth: 10,
	  title: {
		fontFamily: 'Quicksand',       // Set font for the title
        fontSize: 24,        
		text: "Income vs Expenses"
	  },
	  axisX: {
		
	  },
	  axisY: {
		title: "Amount",
		labelFontColor: "#666666",
	  },
	  axisY2:{
		labelFontColor: "#666666",
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
	    legendText: "Income",
	    showInLegend: true, 
		cornerRadius: 10,
		labelFontColor: "#666666",
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
	    legendText: "Expense",
	    axisYType: "secondary",
	    showInLegend: true,
		labelFontColor: "#666666",
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
      responsive: true,
      height: 240,
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