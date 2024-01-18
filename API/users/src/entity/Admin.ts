import { ChildEntity } from 'typeorm';
import User from "./User";

@ChildEntity()
class Admin extends User {    
    get role(): string {
        return 'admin';
    }
}

export default Admin;
