export class Booking {
  id?: number;
  fullName: string;
  email: string;
  mobile: string;
  trainId?: number;

  constructor(
    fullName: string,
    email: string,
    mobile: string,
    trainId?: number
  ) {
    this.fullName = fullName;
    this.email = email;
    this.mobile = mobile;
    this.trainId = trainId;
  }
}
