import { Component } from '@angular/core';
import { ExpenseTableComponent } from "./ExpenseTable/expense-table.component";
import { UserInputComponent } from "./user-input/user-input.component";


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseTableComponent, UserInputComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})

export class ExpensesComponent {
  isAddExpense: boolean = false;

  onClickAddExpense(){
    this.isAddExpense = true;
  }

  onClickCancel(){
    this.isAddExpense = false;
  }
}
