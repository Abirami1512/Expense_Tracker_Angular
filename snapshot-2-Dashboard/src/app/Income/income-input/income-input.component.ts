import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Income } from '../../models/transactions.model';
import { IncomeService } from '../../services/income.service';

@Component({
  selector: 'app-income-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './income-input.component.html',
  styleUrl: './income-input.component.css'
})

export class IncomeInputComponent {

  @Output() close = new EventEmitter<void>();
  
   income : Income = {
    date: this.getTodayDate(),
    source: '',
    description: '',
    amt: 0
  };
  
  // Injecting the Expense Service
  constructor(private incomeservice: IncomeService) {}
  

  // handling form submission
  onSubmit(){
    // storing the expense in expenses array
    this.incomeservice.addIncome(this.income);

    //console.log("Expense added: ", this.expenseService.getExpenses()); 
    this.clearForm();
    this.onCancel();
  }

  clearForm(){
    this.income = {
        date: this.getTodayDate(),
        source: '',
        description: '',
        amt: 0
    }
  }

  onCancel(){
    this.close.emit();
  }

   // Method to get today's date in 'YYYY-MM-DD' format
   private getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // Add leading zero
    const day = ('0' + today.getDate()).slice(-2); // Add leading zero
    return `${year}-${month}-${day}`;
  }
}