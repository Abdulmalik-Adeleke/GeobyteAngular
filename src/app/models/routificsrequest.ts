export interface Routificsrequest {
    visits:any;
    fleet:any;
}
export interface visitslocation {
    name: string;
    lat: number;
    lng: number;
}
export interface vehiclelocation {
    id: string;
    lat: number;
    lng: number;
}
export interface locationobj {
    location: visitslocation;
}
export interface vehicleroute {
    start_location: vehiclelocation;
    end_location?: vehiclelocation;
}
