import {User} from './user.model.client';

export class Follow {
  _id: string;
  from: User;
  to: User;
}
