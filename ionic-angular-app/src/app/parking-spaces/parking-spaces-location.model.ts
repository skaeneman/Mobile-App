// a location belongs to a parking-space

export interface ParkingLatLong {
    lat: number;
    lng: number;
  }

  export interface ParkingSpaceLocation extends ParkingLatLong {
    mapImageUrl: string;
    address: string;
  }

