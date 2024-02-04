import User from './User';

interface Approval {
  id: number;
  tutor: User;
  isGiven: boolean | null;
  comment: string;
}

export default Approval;
