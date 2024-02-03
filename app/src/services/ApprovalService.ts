import axios from 'axios';
import Approval from '../models/Approval';

class ApprovalService {
  url: string = 'http://localhost:8081/approvals';
  // async getApproval(id: string): Promise<Approval> {
  //   const response = await axios.get(`${this.url}/${id}`);
  //   return response.data;
  // }

  async saveApproval(approval: Approval): Promise<void> {
    await axios.post(`${this.url}/${approval.id}/edit`, approval);
  }
}

export default ApprovalService;
