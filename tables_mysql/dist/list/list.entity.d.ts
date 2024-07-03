import { Shift, Role } from "./list.types";
export declare class List {
    list_id: string;
    firstName: string;
    LastName: string;
    email: string;
    phoneNumber: string;
    empId: string;
    shift: Shift;
    role: Role;
    created_at: Date;
    generateEmpId(): void;
}
