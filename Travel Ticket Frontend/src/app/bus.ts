export class Bus {
    id?: number;
    busName: string;
    source: string;
    destination: string;
    arrivalDate: string;
    departureDate: string;
    busFare: number;
  
    constructor(
      busName: string,
      source: string,
      destination: string,
      arrivalDate: string,
      departureDate: string,
      busFare: number,
      id?: number
    ) {
      this.id = id;
      this.busName = busName;
      this.source = source;
      this.destination = destination;
      this.arrivalDate = arrivalDate;
      this.departureDate = departureDate;
      this.busFare = busFare;
    }
  }
  