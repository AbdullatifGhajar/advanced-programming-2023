import { Entity } from 'typeorm';
import User from "./User";

@Entity()
class Student extends User {    
    
}

export default Student;
