
export class Address {
  public publicPlace: string;
  public number: string;
  public complement: string;
  public district: string;
  public postalCode: string;
  public city: string;
  public state: string;


  constructor(publicPlace: string, number: string, complement: string, district: string, postalCode: string, city: string, state: string) {
    this.publicPlace = publicPlace;
    this.number = number;
    this.complement = complement;
    this.district = district;
    this.postalCode = postalCode;
    this.city = city;
    this.state = state;
  }
}
