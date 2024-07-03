import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { Shift, Role } from "./list.types";


@Entity('list')
export class List{
    @PrimaryGeneratedColumn('uuid')
    list_id: string;

    @Column()
    firstName: string;

    @Column()
    LastName: string;

    @Column({unique: true})
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    empId: string;
 
    @Column({
        type: 'enum',
        enum: Shift,
        default: Shift.MORNING
    })
    shift: Shift;


    @Column({
        type: 'enum',
        enum: Role,
        default: Role.WORKER
    })
    role: Role;

    @Column({
        type: 'timestamp',
        default: () => 'NOW()'
    })
    created_at: Date;

    @BeforeInsert()
    generateEmpId(){
        this.empId = 'EMP' + Math.floor(Math.random()*100000).toString().padStart(4,'0');
    }

}