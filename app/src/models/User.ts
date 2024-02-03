export enum UserRole {
  Student = 'student',
  Admin = 'admin',
  Tutor = 'tutor',
}

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export default User;
