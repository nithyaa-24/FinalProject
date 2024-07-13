export class Booking1 {
    id?: number;
    fullName: string;
    email: string;
    mobile: string;
    busId?: number;
  
    constructor(
      fullName: string,
      email: string,
      mobile: string,
      busId?: number
    ) {
      this.fullName = fullName;
      this.email = email;
      this.mobile = mobile;
      this.busId = busId;
    }
  }
  