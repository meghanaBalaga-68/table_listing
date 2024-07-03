export declare enum Sort {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum Role {
    ADMIN = "Admin",
    WORKER = "Worker",
    SUPERVISOR = "Supervisor"
}
export declare enum Shift {
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    EVENING = "Evening",
    NIGHT = "Night"
}
export declare class ListType {
    list_id: string;
    firstName?: string;
    LastName?: string;
    email: string;
    phoneNumber: string;
    empId: string;
    shift: Shift;
    role: Role;
    created_at: Date;
}
export declare class ActionResponseType {
    page: number;
    next_page: number;
    is_next_page: boolean;
    pages: number;
    records_per_page: number;
    total_records: number;
    sort_by: string;
    order: Sort;
    data: ListType[];
}
