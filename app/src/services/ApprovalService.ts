import Approval from '../models/Approval';

import Api from './Api';

class ApprovalService {
  private url = 'approvals';
  private api = new Api();

  // async getApproval(id: string): Promise<Approval> {
  //   const response = await this.api.get(`${this.url}/${id}`);
  //   return response.data;
  // }

  async saveApproval(approval: Approval): Promise<void> {
    await this.api.post(`${this.url}/${approval.id}/edit`, approval);
  }
}

export default ApprovalService;
