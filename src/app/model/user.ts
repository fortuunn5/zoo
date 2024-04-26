import { Role } from "./role";

export class User {
    id!: number;
    lastname!: string;
    firstname!: string;
    middlename!: string;
    phone!: string;
    login!: string;
    password!: string;
    role!: Role;
}
