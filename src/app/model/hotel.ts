import { Service } from "./service";

export class Hotel {
    id!: number;
    name!: string;
    phone!: string;
    address!: string;
    capacity!: number;
    services!: Service[];
}
