export interface IProgram {
    id?: number;
    userID?: number;
    programName:string;
    from: string;
    to: string;
    city?:string;
    selHotel:{
        hotelName: string,
        roomPrice:string
    }
    selTrain: {
        trainNumber: number,
        destination: string,
        ticketPrice:string
      }
}
