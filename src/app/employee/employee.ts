export interface IEmployee {
  firstName: string;
  lastName: string;
  email: string;
  authority: string[];
}

export class Employee {

  constructor(
   public firstName: string = "",
   public lastName: string = "",
   public email: string = "",
   public authority: string[] = []) {
  }
}
