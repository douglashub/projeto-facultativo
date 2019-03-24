import { Gender } from '../../auth/models/user.model';

export interface ProfessionalsModel {
  id: number;
  name: string;
  status: ProfessionalStatus;
  queue: number;
  profession: string;
  location: string;
  gender: Gender;
}

export enum ProfessionalStatus {
  ONLINE = 'Online',
  OFFLINE = 'Offline'
}
