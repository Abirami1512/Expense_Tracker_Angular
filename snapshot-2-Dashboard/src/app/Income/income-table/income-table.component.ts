import { Component, OnInit } from "@angular/core";
import { IncomeService } from "../../services/income.service";
import { Income } from "../../models/transactions.model";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-income-table',
    standalone: true,
    templateUrl: './income-table.component.html',
    imports: [CommonModule], // need to add this to use ngFor
    styleUrl: './income-table.component.css'
})

export class ExpenseTableComponent implements OnInit {

   incomes: Income[] = [];

   constructor( private incomeService: IncomeService){}

   ngOnInit(): void {
       this.incomes = this.incomeService.getIncomes();
   }

   // to remove an expense
   removeExpense(index: number): void {
    this.incomeService.removeIncome(index);
    this.incomes = this.incomeService.getIncomes();
   }
}