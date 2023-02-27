export interface station{
    id: number,
    status: String,
    location: {x: number, y: number},
    current_user: String,
    booked_until: Date
}