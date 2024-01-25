interface User {
  id: number;
  email: string;
  role: string;
}

interface DocumentOverview {
  approvals: { id: number, user: User; given: boolean; }[];
  id: string;
  name: string;
  deadline: Date;
}

export default DocumentOverview;
