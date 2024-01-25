import User from './User';

interface Approval {
  id: number;
  tutor: User;
  isGiven: boolean;
}

export default Approval;
