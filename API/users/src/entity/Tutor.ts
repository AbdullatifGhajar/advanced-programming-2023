import { ChildEntity } from 'typeorm';
import User from "./User";

@ChildEntity()
class Tutor extends User {    
    get role(): string {
        return 'tutor';
    }
}

export default Tutor;
