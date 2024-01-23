interface DocumentOverview {
  approvals: { userId: string; given: boolean; }[];
  id: string;
  name: string;
  deadline: Date;
}

export default DocumentOverview;
