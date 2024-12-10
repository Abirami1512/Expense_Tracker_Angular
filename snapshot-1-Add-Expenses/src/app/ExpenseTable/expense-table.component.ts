import { Component, OnInit } from "@angular/core";
import { ExpenseService } from "../services/expenses.service";
import { Expense } from "../models/expense.model";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-expense-table',
    standalone: true,
    templateUrl: './expense-table.component.html',
    imports: [CommonModule], // need to add this to use ngFor
    styleUrl: './expense-table.component.css'
})

export class ExpenseTableComponent implements OnInit {

   expenses: Expense[] = [];

   constructor( private expenseService: ExpenseService){}

   ngOnInit(): void {
       this.expenses = this.expenseService.getExpenses();
   }

   // to remove an expense
   removeExpense(index: number): void {
    this.expenseService.removeExpense(index);
    this.expenses = this.expenseService.getExpenses();
   }
}