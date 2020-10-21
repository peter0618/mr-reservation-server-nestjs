
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export class User {
    id: number;
    mobilePhone: string;
    name: string;
    email: string;
    role: Role;
}
