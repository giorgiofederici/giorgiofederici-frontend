import { User } from 'src/app/auth/shared/models/user.model';

export interface APIResponse {
  status?: string;
  results?: number;
  data?: {
    data?: any | any[];
    user?: User;
  };
}
