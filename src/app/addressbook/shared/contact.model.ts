import {Address} from './address.model';

export class Contact {
  public firstName: string;
  public lastName: string;
  public cpf: string;
  public bornDate: Date;
  public applicationUserId: string;
  public addresses: Address[];


  constructor(firstName: string, lastName: string, cpf: string, bornDate: Date, applicationUserId: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bornDate = bornDate;
    this.applicationUserId = applicationUserId;
    this.cpf = cpf;
  }
}
