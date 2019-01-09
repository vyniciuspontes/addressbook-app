import {Address} from './address.model';

export class Contact {
  public id: string;
  public firstName: string;
  public lastName: string;
  public cpf: string;
  public phone: string;
  public email: string;
  public bornDate: Date;
  public applicationUserId: string;
  public addresses: Address[];


  constructor(id: string, firstName: string, lastName: string, cpf: string, phone: string,
              email: string, bornDate: Date, applicationUserId: string) {
    this.id = id;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this.bornDate = bornDate;
    this.applicationUserId = applicationUserId;
    this.cpf = cpf;
    this.email = email;
  }
}
