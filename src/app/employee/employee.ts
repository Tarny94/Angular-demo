export interface IEmployee {
  id : string
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  authority: string[];
}

export class Employee {

  constructor(
   public firstName: string = "",
   public lastName: string = "",
   public email: string = "",
   public phone: string = "",
   public authority: string[] = []) {
  }
}
