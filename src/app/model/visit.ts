import { Hotel } from "./hotel";
import { Pet } from "./pet";
import { Service } from "./service";

export class Visit {
    id!: number;
    totalPrice!: number;
    arrivalDate!: Date;
    departureDate!: Date;
    petDto!: Pet;
    hotelDto!: Hotel;
    services!: Service[];
}
