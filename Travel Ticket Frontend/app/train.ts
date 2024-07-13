export class Train {
    id?: number;
    trainName: string;
    source: string;
    destination: string;
    arrivalDate: string;
    departureDate: string;
    trainFare: number;
  
    constructor(
      trainName: string,
      source: string,
      destination: string,
      arrivalDate: string,
      departureDate: string,
      trainFare: number,
      id?: number
    ) {
      this.id = id;
      this.trainName = trainName;
      this.source = source;
      this.destination = destination;
      this.arrivalDate = arrivalDate;
      this.departureDate = departureDate;
      this.trainFare = trainFare;
    }
  }
  