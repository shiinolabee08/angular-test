export interface Customer {
  name: string;
  email: string;
  address: string;
  postcode: string;
  contactNo: string;
}

export class Customer {
  constructor(public id = 0, public email = '', public address = '', public postcode = '', public contactNo = '') {

  }

  clone() { return new Customer(this.id, this.email, this.address, this.postcode, this.contactNo); }
}

export const Customers = [
  {
    name: 'Aldrin Joshua Pernito',
    email: 'aldrin.pernito@gmail.com',
    address: 'Test Location',
    postcode: 'SS1 2NS',
    contactNo: '07915440596',
  },

  {
    name: 'Albert Einstein',
    email: 'albieCool@hydra.site.com',
    address: 'Unknown Location',
    postcode: 'Area 51',
    contactNo: '0000000',
  },
] as Customer[];