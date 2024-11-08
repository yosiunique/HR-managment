export interface Salary {
    id: number;
    employeeId: number;  // Reference to the Employee
    amount: number;  // Salary amount
    date: Date;  // Date the salary was paid
  }
  