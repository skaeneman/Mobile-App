export class Reservation {
    constructor(
      public id: string,
      public userId: string,
      public parkingSpaceId: string,
      public parkingSpaceTitle: string,
      public reservationLength: number
    ) {}
  }
