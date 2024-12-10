import { Injectable } from "@angular/core";
import { Income } from "../models/transactions.model";

@Injectable({
    providedIn: 'root'
})
export class IncomeService{
    // array to store all the expenses
    private incomes: Income[] = [
        {
          date: '2024-10-01',
          source: 'Salary',
          description: 'Monthy Salary from Citi',
          amt: 100000
        },
        {
          date: '2024-10-05',
          source: 'Rental',
          description: 'Rent from alandhur house',
          amt: 15000
        },
        {
          date: '2024-10-10',
          source: 'Others',
          description: 'Sold Tata stocks',
          amt: 20000
        }
      ];

    constructor() {
        const incomes = localStorage.getItem('incomes');

        if (incomes) {
            this.incomes = JSON.parse(incomes);
        }
    }

    //Method to add an expense to array
    addIncome(income: Income): void {
        this.incomes.push(income);
        this.saveIncomes();
    }

    // Method to retrive all expenses
    getIncomes(): Income[] {
        return this.incomes;
    }

    // Method to get sum of all the expenses
    getTotalIncome(): number {
        // array.reduce((accumulator, currentObject) => { ... }, initialValue); -> to calculate sum of an array
        const total = this.incomes.reduce((total:number, income) => total + income.amt , 0);
        return total;
        //return `Rs ${total}`;
    }

    // Method to remove an expense
    removeIncome(index: number): void{
        this.incomes.splice(index, 1);
        this.saveIncomes();
    }

    // Method to get the count of all expenses
    getIncomeCount(): number {
        const count = this.incomes.length;
        return count;
    }

    // storing the data in localStorage
    private saveIncomes() {
        localStorage.setItem('incomes', JSON.stringify(this.incomes));
    }
}