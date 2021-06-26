export interface Mapmapper {
    name: string;
    lat: number;
    lng: number;
    isdelivery: boolean;
}

export interface Markermapper {
    name: string;
    location: google.maps.LatLngLiteral;
    isdelivery: boolean;
}
