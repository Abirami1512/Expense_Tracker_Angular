import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Expense } from '../../models/transactions.model';
import { ExpenseService } from '../../services/expenses.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  @Output() close = new EventEmitter<void>();
  
  expense : Expense = {
    date: this.getTodayDate(),
    category: '',
    description: '',
    amt: 0
  };
  
  // Injecting the Expense Service
  constructor(private expenseService: ExpenseService) {}
  

  // handling form submission
  onSubmit(){
    // storing the expense in expenses array
    this.expenseService.addExpense(this.expense);

    console.log("Expense added: ", this.expenseService.getExpenses()); 
    this.clearForm();
    this.onCancel();
  }

  clearForm(){
    this.expense = {
      date:'',
      category: '',
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