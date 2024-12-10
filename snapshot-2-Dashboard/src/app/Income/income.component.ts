import { Component } from '@angular/core';
import { IncomeInputComponent } from './income-input/income-input.component';
import { ExpenseTableComponent } from "./income-table/income-table.component";


@Component({
  selector: 'app-income',
  standalone: true,
  imports: [IncomeInputComponent, ExpenseTableComponent],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})

export class IncomeComponent {
  isAddIncome: boolean = false;

  onClickAddIncome(){
    this.isAddIncome = true;
  }

  onClickCancel(){
    this.isAddIncome = false;
  }
}
