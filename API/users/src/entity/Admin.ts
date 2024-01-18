import { Entity } from 'typeorm';
import User from "./User";

@Entity()
class Admin extends User {    
    
}

export default Admin;
