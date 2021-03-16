export interface IProgram {
  id?: number;
  userID?: number;
  programName:string;
  fromDate: string;
  toDate: string;
  cityID?:number;
  img?:string;
  toCityID?:string;
  fromCityID?:string;

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
