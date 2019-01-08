import {Address} from './address.model';

export class Contact {
  public id: string;
  public firstName: string;
  public lastName: string;
  public cpf: string;
  public bornDate: Date;
  public applicationUserId: string;
  public addresses: Address[];


  constructor(id: string, firstName: string, lastName: string, cpf: string, bornDate: Date, applicationUserId: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.bornDate = bornDate;
    this.applicationUserId = applicationUserId;
    this.cpf = cpf;
  }
}
