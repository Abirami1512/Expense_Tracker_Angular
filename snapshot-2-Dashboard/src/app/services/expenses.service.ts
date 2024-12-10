import { Injectable } from "@angular/core";
import { Expense } from "../models/transactions.model";

@Injectable({
    providedIn: 'root'
})
export class ExpenseService{
    // array to store all the expenses
    private expenses: Expense[] = [
        {
          date: '2024-10-01',
          category: 'Groceries',
          description: 'Bought fruits and vegetables',
          amt: 50.25
        },
        {
          date: '2024-10-05',
          category: 'Bills',
          description: 'Paid electricity bill',
          amt: 75.50
        },
        {
          date: '2024-10-10',
          category: 'Transport / Travel',
          description: 'Bus fare',
          amt: 15.00
        }
      ];

    constructor() {
        const expenses = localStorage.getItem('expenses');

        if (expenses) {
            this.expenses = JSON.parse(expenses);
        }
    }

    //Method to add an expense to array
    addExpense(expense: Expense): void {
        this.expenses.push(expense);
        this.saveExpenses();
    }

    // Method to retrive all expenses
    getExpenses(): Expense[] {
        return this.expenses;
    }

    // Method to get sum of all the expenses
    getTotalExpense(): number {
        // array.reduce((accumulator, currentObject) => { ... }, initialValue); -> to calculate sum of an array
        const total = this.expenses.reduce((total:number, expense) => total + expense.amt , 0);
        return total;
        //return `Rs ${total}`;
    }

    // Method to remove an expense
    removeExpense(index: number): void{
        this.expenses.splice(index, 1);
        this.saveExpenses();
    }

    // Method to get the count of all expenses
    getExpenseCount(): number {
        const count = this.expenses.length;
        return count;
    }

    // storing the data in localStorage
    private saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }
}