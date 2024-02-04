import Approval from '../models/Approval';
import { StudentWithDocumentCount } from '../models/User';

import Api from './Api';

class ApprovalService {
  private url = 'approvals';
  private api = new Api();

  async fetchStudentsWithDocumentCount(): Promise<StudentWithDocumentCount[]> {
    const response = await this.api.get(`${this.url}/students`);
    return response.data;
  }

  async saveApproval(approval: Approval): Promise<void> {
    await this.api.post(`${this.url}/${approval.id}/edit`, approval);
  }
}

export default ApprovalService;
