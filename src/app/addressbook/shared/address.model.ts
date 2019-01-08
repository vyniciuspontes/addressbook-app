
export class Address {
  public publicPlace: string;
  public number: string;
  public complement: string;
  public district: string;
  public postalCode: string;


  constructor(publicPlace: string, number: string, complement: string, district: string, postalCode: string) {
    this.publicPlace = publicPlace;
    this.number = number;
    this.complement = complement;
    this.district = district;
    this.postalCode = postalCode;
  }
}
