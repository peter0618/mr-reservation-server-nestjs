
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
    abstract reservations(): Reservation[] | Promise<Reservation[]>;

    abstract users(): User[] | Promise<User[]>;
}

export class Reservation {
    id: number;
    meetingAgenda: string;
    reservedAt: string;
    startTime: string;
    endTime: string;
    madeBy: string;
    delYn: string;
    mdfDtm: string;
    regDtm: string;
}

export class User {
    id: number;
    mobilePhone: string;
    name: string;
    email: string;
    role: Role;
}
