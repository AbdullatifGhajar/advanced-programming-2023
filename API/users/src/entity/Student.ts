import { ChildEntity } from 'typeorm';
import User from "./User";

@ChildEntity()
class Student extends User {
    get role(): string {
        return 'student';
    }
}

export default Student;
