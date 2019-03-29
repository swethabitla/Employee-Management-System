export interface Client {
  id?: string;
  employeeid: string;
  position: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone?: string;
  balance: number;
}
