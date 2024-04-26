import { Gender } from "./gender";
import { Type } from "./type";
import { User } from "./user";

export class Pet {
    id!: number;
    name!: string;
    age!: number;
    type!: Type;
    gender!: Gender;
    user!: User;
}
