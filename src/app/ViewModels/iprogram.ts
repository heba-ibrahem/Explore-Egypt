export interface IProgram {
  id?: number;
  userID?: number;
  programName:string;
  from: string;
  to: string;
  city?:string;
  img?:string;
  toCity?:string;
  fromCity?:string;

  selHotel:{
      hotelName: string,
      roomPrice:string,
      adress:string,
      contactInfo:string,
  }
  selTrain: {
      trainNumber: number,
      destination: string,
      ticketPrice:string,
      details:string,
      arrivalTime:string,
      departureTime:string,
    }
}
