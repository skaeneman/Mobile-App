export class Reservation {
    constructor(
      public id: string,
      public parkingSpaceId: string,
      public userId: string,
      public parkingSpaceTitle: string,
      public url: string,
      public firstName: string,
      public lastName: string,
      public reservedDayCount: number,
      public reservedFrom: Date,
      public reservedTo: Date,
    ) {}
  }
