export interface MyUser {
  firstName: string;
  lastName: string;
  email: string;
  userStatus: 'Active' | 'Inactive';
  lastLogin: string;
  paymentStatus: 'Paid' | 'Unpaid' | 'Overdue';
  paymentPrefix: string;
  date: string;
  amount: number;
  id: number;
  visibility: 'visible' | 'unvisible';
}
