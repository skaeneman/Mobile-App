export class ParkingSpaces {
    constructor(
        public id: string,
        public userId: string,
        public title: string,
        public description: string,
        public url: string,
        public price: number,
        public dateFrom: Date,
        public dateTo: Date
        ){}
}

