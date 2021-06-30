export interface Hub {
    City: string;
    Address: string;
    Latitude: number;
    Longitude: number;
    Fee: number;
}
export interface Log {
    log: string;
}
export interface Deletemarked {
    ids: number[];
}