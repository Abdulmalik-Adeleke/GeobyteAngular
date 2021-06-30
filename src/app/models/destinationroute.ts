export interface Destinationroute {
    destinationdto: DestinationDto;
    routes: string[];
}

export interface DestinationDto {
    StartCity: string;
    EndCity: string;
    RouteDistance: number;
}
