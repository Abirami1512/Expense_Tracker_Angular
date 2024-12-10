export interface Expense{
    date: string;
    category: string;
    description: string;
    amt: number;
}

export interface Income{
    date: string;
    source: string;
    description: string;
    amt: number;
}