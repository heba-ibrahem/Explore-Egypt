export interface IProgram {
    id: number;
    userID: number;
    from: string;
    to: string;
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
